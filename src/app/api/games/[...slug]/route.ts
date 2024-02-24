import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPID_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    // Filtrar os jogos com base na categoria, se fornecida
    const filteredGames = category
      ? response.data.filter((game: any) => game.category === category)
      : response.data;

    // Retornar apenas os dados dos jogos
    return NextResponse.json(filteredGames, { status: 200 });
  } catch (error) {
    console.error(error);

    // Retornar um erro como resposta para a requisição
    return NextResponse.json(
      { message: "Erro na chamada à API" },
      { status: 500 }
    );
  }
}
