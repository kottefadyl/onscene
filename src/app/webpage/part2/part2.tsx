import { FiMusic } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { FaPaintbrush } from "react-icons/fa6";
import { GiBodyBalance } from "react-icons/gi";
import ArtistCard from "../artist";
import image1 from "./images/7289d5c9c5e73aa67cebed3e25af6d9eceb4613f.png"
import image2 from "./images/c45c465a36f08238940c170151fe0524cac6b6b1.jpg"
import { FaArrowRight } from "react-icons/fa";

export default function part2() {
    return (
        <div className="mx-12">
            <div className="flex justify-between w-3/5 items-center mx-auto mt-20">
                <div className="text-center">
                    <span className="p-6 justify-center flex bg-neutral-300 rounded-full text-center">
                        <FiMusic className="text-xl text-blue-700 font-bold" />
                    </span>
                    <h3 className="mt-3 font-bold">Music</h3>
                </div>
                <div className="text-center">
                    <span className="p-6 justify-center flex bg-neutral-300 rounded-full text-center">
                        <BiMoviePlay className="text-xl text-blue-700 font-bold" />
                    </span>
                    <h3 className="mt-3 font-bold">Movie</h3>
                </div>
                <div className="text-center">
                    <span className="p-6 justify-center flex bg-neutral-300 rounded-full text-center">
                        <FaPaintbrush className="text-xl text-blue-700 font-bold" />
                    </span>
                    <h3 className="mt-3 font-bold">art</h3>
                </div>
                <div className="text-center">
                    <span className="p-6 justify-center flex bg-neutral-300 rounded-full text-center">
                        <GiBodyBalance className="text-xl text-blue-700 font-bold" />
                    </span>
                    <h3 className="mt-3 font-bold">dance</h3>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold text-blue-700">Famous Artists</h2>
                <div className="flex justify-between mt-20">
                    <ArtistCard
                        name="Nom de l'artiste"
                        email="@Pseudo"
                        profilePicture={image2}
                        backgroundPicture={image1}
                        artType="Musique" />
                    <ArtistCard
                        name="Nom de l'artiste"
                        email="@Pseudo"
                        profilePicture={image2}
                        backgroundPicture={image1}
                        artType="Musique" />
                    <ArtistCard
                        name="Nom de l'artiste"
                        email="@Pseudo"
                        profilePicture={image2}
                        backgroundPicture={image1}
                        artType="Musique" />
                    <ArtistCard
                        name="Nom de l'artiste"
                        email="@Pseudo"
                        profilePicture={image2}
                        backgroundPicture={image1}
                        artType="Musique" />
                </div>
                <div className=" my-10 flex justify-center">
                    <button className="mx-2 rounded-3xl bg-yellow-300 text-black py-2 px-4 flex "><span>see more artists </span> <span className=" my-auto mx-2"><FaArrowRight /></span></button>
                </div>
            </div>
        </div>
    )
}