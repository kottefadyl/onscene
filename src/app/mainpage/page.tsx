import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import followed from "./images/f0ec8ab8c2b3f0bb303b7076937ece7329145e99.png";
import { GoBell } from "react-icons/go";

import { TiHome } from "react-icons/ti";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuFrame } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import Followed from "./followedcomponent";

export default function Page() {
    return (
        <div className="flex bg-gray-100 min-h-screen">

            {/* ================= LEFT SIDEBAR ================= */}
            <aside className="w-64 bg-white p-4 flex flex-col justify-between border-r">

                <div>
                    <Image src={logo} alt="logo" className="w-fit" />

                    <nav className="space-y-2">
                        <Link className="font-bold flex items-center gap-2  p-2 rounded hover:bg-gr text-smay-100" href="#">
                            <TiHome /> Accueil
                        </Link>

                        <Link className="font-bold flex items-center gap-2  p-2 rounded bg-gray-200 text-sm" href="#">
                            <IoNewspaperOutline /> Actualités
                        </Link>

                        <Link className="font-bold flex items-center gap-2  p-2 rounded hover:bg-gr text-smay-100" href="#">
                            <LuFrame /> Œuvres
                        </Link>

                        <Link className="font-bold flex items-center gap-2  p-2 rounded hover:bg-gr text-smay-100" href="#">
                            <MdOutlineExplore /> Explorer
                        </Link>

                        <Link className="font-bold flex items-center gap-2  p-2 rounded hover:bg-gr text-smay-100" href="#">
                            <IoMdSettings /> Paramètres
                        </Link>
                    </nav>

                    {/* Subscriptions */}
                    <div className="mt-6">
                        <h3 className="flex items-center justify-between font-semibold text-sm mb-3">
                            Abonnement <IoIosArrowForward />
                        </h3>

                        {[1, 2, 3, 4].map((_, i) => (
                            <Followed
                                name="ivan"
                                profilePicture={followed}
                            />
                        ))}
                    </div>
                </div>

                {/* Become artist */}
                <div className="bg-gradient-to-r from-yellow-400 to-blue-500 p-4 rounded-xl text-white">
                    <button className="bg-neutral-800 text-neutral-200 font-bold flex items-center gap-2  px-4 py-2 rounded-full  text-smtext-sm">
                        <BsStars /> Devenez artiste
                    </button>
                </div>
            </aside>

            {/* ================= CENTER FEED ================= */}
            <main className="flex-1 p-6">

                {/* Search */}
                <div className="flex align-middle items-center">
                    <div className="bg-white p-3 rounded-full mb-4 shadow-sm w-4/5 ">
                        <input
                            type="text"
                            placeholder="Rechercher un artiste"
                            className="w-full outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-4 mx-5">

                        {/* Bell */}
                        <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                            <GoBell size={18} />

                            {/* optional badge */}
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                                +99
                            </span>
                        </div>

                        {/* Profile */}
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full text-sm font-semibold">
                            P
                        </div>

                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-6">
                    {["Tous", "Musique", "Cinema", "Arts visuels", "Danse", "Autre"].map((item, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm ${i === 0 ? "bg-black text-white" : "bg-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Posts */}
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl mb-6 shadow-sm">

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-3">
                            <Image src={followed} alt="profile" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-semibold text-sm">Nom de l'artiste</p>
                                <p className="text-xs text-gray-500">il y a 2 minutes</p>
                            </div>
                        </div>

                        {/* Content */}
                        <p className="font-semibold mb-2">
                            Korem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <p className="text-sm text-gray-600 mb-2">
                            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie...
                        </p>

                        <div className="text-blue-500 text-sm mb-3">#Tag #Tag</div>

                        {/* Actions */}
                        <div className="flex gap-5  text-gray-600 text-sm">
                            <span>❤️ 132</span>
                            <span>💬 3</span>
                            <span>🔖</span>
                            <span>↗</span>
                        </div>
                    </div>
                ))}
            </main>

            {/* ================= RIGHT PANEL ================= */}
            <aside className="w-80 p-4 space-y-6">

                {/* Popular */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h3 className="font-semibold mb-4">Les plus populaire</h3>

                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 mb-3">
                            <Image src={followed} alt="profile" className="w-8 h-8 rounded-full" />
                            <span className="text-sm font-medium">Splash Log</span>
                        </div>
                    ))}
                </div>

                {/* Events */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h3 className="font-semibold mb-4">Événement</h3>

                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="mb-4">
                            <p className="text-sm font-medium">Nom de l'événement</p>
                            <p className="text-xs text-gray-500">19-05-2026 09:00</p>
                        </div>
                    ))}
                </div>
            </aside>

        </div>
    );
}