import { Link } from "react-router"

export default function TopGamesCard({ game }) {
    return (
        <>
            <div className="h-[200px] relative">
                <Link to={`/detail/${game.id}`}>
                    <img src={`${game.background_image}`} alt="card-game" className="w-full h-full brightness-75" />
                </Link>
                <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
                <p className="absolute top-2 right-2 bg-black/70 text-yellow-400 px-2 py-1 rounded text-sm">
                    ⭐ {game.rating}
                </p>
            </div>
        </>
    )
}