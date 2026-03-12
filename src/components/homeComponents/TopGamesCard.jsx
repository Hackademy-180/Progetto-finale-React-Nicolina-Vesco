import { Link } from "react-router"

export default function TopGamesCard({ game }) {
    return (
        <>
            <div className="hover-3d flex ">
                <div className="relative w-80 rounded-2xl">

                    {/* content */}
                    <figure className="w-80 rounded-2xl">
                        <Link to={`/detail/${game.id}`}>
                            <img src={`${game.background_image}`} alt="card-game" className="w-full h-48 object-cover block brightness-75" />
                        </Link>
                    </figure>
                    <p className="absolute bottom-0 left-0 right-0 z-10 px-3 py-2 text-center font-semibold bg-gradient-to-t from-black/90 to-trasparent w-full text-white">{game.name}</p>
                    <p className="absolute top-2 right-2 bg-black/70 text-yellow-400 px-2 py-1 rounded text-sm">
                        ⭐ {game.rating}
                    </p>
                </div>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}