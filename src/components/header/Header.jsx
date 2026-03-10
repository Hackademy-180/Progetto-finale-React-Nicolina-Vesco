import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const slider = document.querySelector('.slider');

        function activate(e) {
            const items = document.querySelectorAll('.item');

            if (e.target.closest('.next')) {
                slider.append(items[0]);
            }

            if (e.target.closest('.prev')) {
                slider.prepend(items[items.length - 1]);
            }
        }
        document.addEventListener('click', activate);
        return () => {
            document.removeEventListener('click', activate);
        };
    }, []);

    return (
        <>
            <header className="rev-header">
                <div className="absolute top-25 md:top-30 left-8 md:left-12 z-20 headerTitle">
                    <h1 className="text-5xl font-extrabold tracking-widest text-(--color-btn) text-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        REHACKTOR
                    </h1>
                    <p className="text-gray-200 text-sm tracking-wide">Videogame reviews</p>
                </div>
                <ul className='slider'>
                    <li className='img0 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl'>Monster Hunter Wilds</h2>
                            <p className='description !text-[0.9rem] font-semibold'> Monster Hunter Wilds is the new installment in Capcom’s famous series. Players will explore vast dynamic ecosystems where monsters interact with each other and with the environment. With new weapons, gigantic creatures, and an even more vibrant world, the game promises epic hunts both in single player and in cooperative mode.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='img1 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'>Resident Evil 9</h2>
                            <p className='description !text-[0.9rem] font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'> Resident Evil 9 continues Capcom’s iconic horror saga with a new story set in a dark world full of mystery. Players will face terrifying creatures, solve puzzles, and struggle to survive in increasingly dangerous environments while uncovering the truth behind a new biological threat.</p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='img2 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl'>Wolverine</h2>
                            <p className='description !text-[0.9rem] font-semibold'> Developed by Insomniac Games, Marvel’s Wolverine tells the story of the famous mutant Logan. The game promises intense combat, a more mature narrative, and dynamic gameplay that takes full advantage of Wolverine’s iconic claws. </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='img3 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl'>Mass Effect</h2>
                            <p className='description !text-[0.9rem] font-semibold'>
                                The next chapter in the Mass Effect saga brings players back to space for a new galactic adventure. The game will continue the story of the universe created by BioWare with new missions, alliances, and decisions that will influence the fate of the galaxy.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='img4 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl'>The Witcher IV</h2>
                            <p className='description !text-[0.9rem] font-semibold'>
                               The new chapter of The Witcher saga opens a new trilogy set in the same fantasy universe. With a completely renewed graphics engine and an even larger open world, players will explore dangerous lands while facing monsters and complex moral choices.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='img5 item'>
                        <div className='content'>
                            <h2 className='title !text-[1.5rem] lg:text-3xl'>Pragmata</h2>
                            <p className='description !text-[0.9rem] font-semibold'> Pragmata is a mysterious game developed by Capcom set in a dystopian future. Players will explore a lunar station alongside a mysterious android girl while trying to discover what happened to the human colony.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                </ul>
                <nav className='nav'>
                    <button className='btn prev' name="arrow-back-outline"><GrFormPrevious /></button>
                    <button className='btn next' name="arrow-forward-outline"><MdNavigateNext /></button>
                </nav>
            </header>
        </>

    )
}


