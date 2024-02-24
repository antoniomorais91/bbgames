import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(request: Request, res: NextApiResponse<ResponseData>) {
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
    console.log(response.data);

    // Retornar apenas os dados dos jogos
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);

    // Retornar um erro como resposta para a requisição
    return NextResponse.json(
      { message: "Erro na chamada à API" },
      { status: 500 }
    );
  }
}
