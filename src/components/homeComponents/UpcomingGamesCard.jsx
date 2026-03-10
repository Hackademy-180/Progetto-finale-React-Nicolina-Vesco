import { FaRocket } from "react-icons/fa";
import { Link } from "react-router"


export default function UpcomingGamesCard({ game }) {
    return (
        <>
            <div className="h-[200px] relative rounded-xl overflow-hidden">
                <Link to={`/detail/${game.id}`}>
                    <img src={`${game.background_image || "/media/no-image.png"}`} alt="card-game" className="w-full h-full brightness-50 "  />
                </Link>
                <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
                <p className="absolute top-2 right-2 bg-black/70 text-yellow-400 px-2 py-1 rounded text-sm">
                     <FaRocket />Coming Soon
                </p>
            </div>
        </>
    )
}