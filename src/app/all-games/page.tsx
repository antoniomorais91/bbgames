"use client";

import GameCard from "@/components/Games/GameCard";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  title: string;
  genre: string;
  short_description: string;
  game_url: string;
  thumbnail: string;
}

export default function AllGames() {
  const [loading, setLoading] = useState(false);
  const [gameData, setGameData] = useState<Game[]>([]);

  // UseEffect para chamar a API no carregamento da página
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fazer a chamada à API no lado do cliente (browser)
        const response = await fetch("/api/games/all-games");
        const responseData = await response.json();

        // Verifica se a resposta contém um array de jogos
        if (Array.isArray(responseData) && responseData.length > 0) {
          setGameData(responseData);
        } else {
          console.error(
            "Resposta da API não contém um array de jogos válido",
            responseData
          );
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(gameData);

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full my-2 p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-7xl dark:bg-background">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
        {loading ? "Processando" : "Todos os Jogos"}
        </h1>
        <article>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mt-16">
              {Array.isArray(gameData) ? (
                gameData.map((item) => (
                  <GameCard
                    key={item.id}
                    title={item.title}
                    genre={item.genre}
                    short_description={item.short_description}
                    game_url={item.game_url}
                    thumbnail={item.thumbnail}
                  />
                ))
              ) : (
                <p>Nenhum jogo disponível.</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
