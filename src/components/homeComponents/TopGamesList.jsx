import TopGamesCard from "../homeComponents/TopGamesCard"

export default function TopGamesList({children}){
    return(
        <>
            <main className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
                {children}
            </main>
        </>
    )
}

TopGamesList.Card = TopGamesCard;