import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import supabase from "../../database/supabase";
import { useState, useEffect } from "react";

export default function BodySection({ game, profile_id }) {

    const [isFavourite, setIsFavourite] = useState(false);
    const [description, setDescription] = useState("");
    const [gameReviews, setGameReviews] = useState([]);
    const [checkReview, setCheckReview] = useState(false);

    const handle_description = (e) => {
        setDescription(e.target.value);
    };

    const get_reviews = async () => {
        let { data: reviews, error } = await supabase.from("reviews").select("*").eq("game_id", game.id);
        setGameReviews(reviews);
    };

    const add_review = async () => {
        const { data, error } = await supabase.from("reviews").insert([{ profile_id, game_id: game.id, game_name: game.name, game_description: description }]).select();

        setDescription("");
        setCheckReview(!checkReview)
    };

    const get_favourite = async () => {
        let { data: favourites, error } = await supabase.from("favourites").select("*").eq("profile_id", profile_id).eq("game_id", game.id);

        if (favourites.length > 0) setIsFavourite(true);
    };

    useEffect(
        () => {
            get_favourite();
            get_reviews();
        }, [checkReview]
    );

    const add_game = async () => {
        const { data, error } = await supabase.from("favourites").insert([{ profile_id, game_id: game.id, game_name: game.name, game_image: game.background_image, game_description: game.description_raw?.slice(0, 80), game_rating: game.rating, game_playtime: game.playtime }]).select();
        setIsFavourite(true);
    };
    const remove_game = async () => {
        const { error } = await supabase.from("favourites").delete().eq("profile_id", profile_id).eq("game_id", game.id);
        setIsFavourite(false);
    }

    return (
        <section className="flex justify-center ms-7 md:ms-0 md:gap-6 py-8 md:px-10">
            <div className="col-span-5 flex flex-col w-full max-w-4xl">
                <div className="bg-black/30 blackdrop-blur-md rounded-2xl p-6  border border-white/10 mb-6">

                    <h2 className="text-white text-2xl font-semibold mb-4">Post your review</h2>
                    <textarea className="textarea w-full min-h-[120px] bg-slate-900/80 text-white border border-white/10 rounded-xl" placeholder="Type your review" onChange={handle_description} value={description}></textarea>
                    <button className="btn bg-nav-gray px-6 mt-3" onClick={add_review}>Send</button>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <h2 className="text-white text-2xl font-semibold mb-4">Review</h2>
                    <div className="max-h-[320px] overflow-y-auto space-y-4 pr-2">

                        {gameReviews && gameReviews.map((review) => {
                            return (
                                <div key={review.id} className="bg-slate-900/70 border border-white/10 rounded-xl p-4 text-white">
                                    <p className="text-sm text-gray-400 mb-2">User #{review.profile_id}</p>
                                    <p className="leading-relaxed">{review.game_description}</p>
                                
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="-translate-x-5 -translate-y-10 md:translate-x-0 md:translate-y-0  ">
                {isFavourite &&
                    <FaStar className="text-amber-400 cursor-pointer text-3xl" onClick={remove_game} />
                    ||
                    <FaRegStar className="text-amber-400 cursor-pointer text-3xl" onClick={add_game} />
                }
            </div>

        </section>
    )

}
