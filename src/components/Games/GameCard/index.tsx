import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"

  interface GamesProps {
    title: string
    genre: string
    short_description: string
    game_url: string
    thumbnail: string
  }
  
  export default function GameCard(props: GamesProps) {
    return (
      <Card className="lg:max-w-md w-full transition">
        <CardHeader>
          <CardTitle className="dark:text-[#7A36D9]">{props.title}</CardTitle>
          <CardDescription className="dark:text-[#F2A172] underline">{props.genre}</CardDescription>
          <CardDescription>{props.short_description}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={props.thumbnail}
            alt="Card Image"
            className="w-full duration-200 ease-in hover:scale-110"
          />
        </CardContent>
        <CardFooter className="flex-col items-center">
          <p>Quer conhecer?</p>
          <Link href={props.game_url} target="_blank" className="duration-200 ease-in-out text-[#422BD9] hover:text-[#BF3B3B] hover:scale-110">Clique Aqui</Link>
        </CardFooter>
      </Card>
    )
  }