import { Link } from "react-router"

export default function GameCard({game}){
    return(
        <>
            <div className="h-[200px] relative">
                <Link to={`/detail/${game.id}`}>
                <img src={`${game.background_image}`} alt="card-game" className="w-full h-full brightness-75 " />
                </Link>
                <p className="absolute bottom-2 left-0 right-0 text-center text-white font-semibold px-2">{game.name}</p>
            </div>
        </>
    )
}