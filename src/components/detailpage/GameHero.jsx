import { FaStar, FaClock, FaTrophy, FaGlobe } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Header({ game }) {
    return (
        <header className="pt-10 text-nav-gray">
            <h1 className="text-center text-5xl mb-2 font-bold font-roboto">{game.name}</h1>
            <h2 className="text-center text-2xl">
                Released on: <span className="font-bold">{game.released}</span>
            </h2>
            <section className="flex flex-col gap-4 mt-20">
                <div className="flex flex-col gap-10 md:gap:0 md:flex-row md:justify-around md:items-start">
                    <article className="px-10 md:w-[600px]">
                        <p className="line-clamp-18 font-electro">{game.description_raw}</p>
                    </article>

                    <div className="card rounded-3xl border bg-base-100/80 border-gray-700  md:w-100">
                        <div className="card-body p-8 text-center">
                            <h3 className="text-2xl font-bold mb-6 text-center font-electro tracking-wide">
                                Game Overview
                            </h3>
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <div className="flex items-center gap-3 text-white/80">
                                    <FaStar className="text-yellow-400" />
                                    <span className="font-bold text-xl">Rating</span>
                                </div>
                                <span className="font-bold text-lg">{game.rating}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <div className="flex items-center gap-3 text-white/80">
                                    <FaClock className="text-orange-400" />
                                    <span className="font-bold text-xl">Playtime: </span>
                                </div>
                                <span className="font-bold text-lg">{game.playtime} H</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <div className="flex items-center gap-3 text-white/80">
                                    <FaTrophy className="text-amber-300" />
                                    <span className="font-bold text-xl">Achievements: </span>
                                </div>
                                <span className="font-bold text-lg">{game.achievements_count}</span>
                            </div>
                            <div className="mt-8">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <IoGameController className="text-orange-400" />
                                    <p className="text-xl font-bold">Genres:</p>
                                </div>
                                <ul className="flex  justify-center gap-2">
                                    {game.genres.map((genre) => {
                                        return <li className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white whitespace-nowrap hover:bg-white/10 transition" key={genre.id}>{genre.name}</li>
                                    })}
                                </ul>
                            </div>

                            <a href={game.website} target="_blank" rel="noopener noreferrer" className="underline font-semibold flex items-center justify-center gap-1 mt-3  text-xl text-(--color-btn)"><FaGlobe />Visit official website<HiOutlineExternalLink /></a>
                        </div>
                    </div>
                    <article className="text-center">

                    </article>
                </div>

            </section>
        </header>
    )
}