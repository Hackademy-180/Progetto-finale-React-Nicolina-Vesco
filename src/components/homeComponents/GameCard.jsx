import { Link } from "react-router"

export default function GameCard({ game }) {
    return (
        <>
            
                <div className="h-[200px] relative rounded-xl overflow-hidden">
                    <Link to={`/detail/${game.id}`}>
                        <img src={`${game.background_image}`} alt="card-game" className="w-full h-full brightness-75 object-cover" />
                    </Link>
                    <p className="absolute bottom-2 left-3 right-3 text-center text-sm text-white font-semibold px-2">{game.name}</p>
                </div>
            
        </>
    )
}