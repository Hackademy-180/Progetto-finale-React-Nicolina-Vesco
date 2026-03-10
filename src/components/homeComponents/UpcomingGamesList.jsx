import UpcomingGamesCard from "../homeComponents/TopGamesCard"

export default function UpcomingGamesList({children}){
    return(
        <>
            <main className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
                {children}
            </main>
        </>
    )
}

UpcomingGamesList.Card = UpcomingGamesCard;