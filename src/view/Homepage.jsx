import { useLoaderData } from "react-router-dom"
import GameList from "../components/homeComponents/GameList"
import TopGamesList from "../components/homeComponents/TopGamesList";
import TopGamesCard from "../components/homeComponents/TopGamesCard";
import UpcomingGamesCard from "../components/homeComponents/UpcomingGamesCard";
import UpcomingGamesList from "../components/homeComponents/UpcomingGamesList";

export default function Homepage() {
    const { games, topRated, upcoming } = useLoaderData();
    return (
        <>
            <main className="pb-10">

                <section className="pt-15 container mx-auto">

                    <h1 className="font-electro text-3xl  font-bold border-b-2 ">Games of the Year 2025</h1>

                    <div className="mt-5">
                        <GameList>
                            {games.map((game) => {
                                return (
                                    <GameList.Card key={game.id} game={game} />
                                )
                            })}
                        </GameList>
                    </div>

                </section>
                <section className="pt-15 container mx-auto">
                    <h1 className="font-electro text-3xl font-bold border-b-2">Top Rated Games</h1>
                    <div className="mt-5">
                        <TopGamesList>
                            {topRated.map((game) => (
                                <TopGamesCard key={game.id} game={game} />
                            )
                            )}
                        </TopGamesList>

                    </div>
                </section>
                <section className="pt-15 container mx-auto">
                    <h1 className="font-electro text-3xl font-bold border-b-2">Upcoming Games</h1>
                    <div className="mt-5">
                        <UpcomingGamesList>
                            {upcoming.map((game) => (
                                <UpcomingGamesCard key={game.id} game={game} />
                            ))}
                        </UpcomingGamesList>

                    </div>
                </section>

            </main>
        </>
    )
}