import { useLoaderData, useNavigate } from "react-router-dom";
import GameHero from "../components/detailpage/GameHero";
import { FaCircleArrowLeft } from "react-icons/fa6";
import BodySection from "../components/detailpage/BodySection"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function DetailPage(){
    const game = useLoaderData();
    const navigate = useNavigate();
    const {profile} = useContext(UserContext);

    return (
        <>
        <main style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${game.background_image})`,}} className="min-h-screen bg-center bg-cover bg-fixed">
            <FaCircleArrowLeft className="text-3xl fixed-bottom-6 text-white left-6 cursor-pointer" onClick={()=>navigate(-1)} />
                <GameHero game={game} />
                {profile && <BodySection game={game} profile_id={profile.id}/>}
    
        </main>
        </>
    )
}
