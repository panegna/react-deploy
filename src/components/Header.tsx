import React from "react";
import france from "../assets/france.png";
import logo from "../assets/logo.png";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import heart from "../assets/heart.svg";

const Header = () =>{
    return (
       <>
       <div className="bg-black flex justify-center h-8 items-center">
            <p className="text-white text-sm font-sans font-bold">livraison gratuite en point relais | retours sous 60 jours</p>
       </div>
       <nav className="flex justify-end  p-4">
            <ul className="flex gap-2.5 items-center">
                <li><a href="/"><img className="w-5 h-5" src={france} alt="" /></a></li>
                <li className="font-sans text-sm hover:underline"><a href="/">aide</a></li>
                <li className="font-sans text-sm">|</li>
                <li className="font-sans text-sm hover:underline"><a href="/">connexion</a></li>
            </ul>
       </nav>
       <nav className="font-sans text-base p-4">
            <ul className="flex justify-between items-center">
                <li className="pl-16"><a href="/"><img className="w-24" src={logo} alt="" /></a></li>
                <li className="flex items-center gap-9">
                    <a href="/">Nouveautés</a>
                    <a href="/">Promotions</a>
                    <a href="/">Trouver un magasin</a>
                </li>
                <li>
                    <div className="flex items-center gap-14">
                        <div className="relative w-ful ">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Rechercher" autoComplete="off" required/>
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white  focus:outline-none ">
                            <img src={search} alt="" />
                            </button>
                        </div>
                        <div className="flex items-center gap-5">
                            <a href="/"><img src={bag} alt="" /></a>
                            <a href="/"><img src={heart} alt="" /></a>
                        </div>
                    </div>
                </li>
               
            </ul>
       </nav>
       </>
    );
}

export default Header;