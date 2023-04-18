import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import strikeforce from "../assets/strikeforce.png"
import heart from "../assets/heart.svg";


const Produit = () =>{
    return (
        <>
        <Header />
        <div className="flex justify-around items-center mt-28 px-52 mb-28">
            <div className="w-96">
                <img src={strikeforce} alt="" />
            </div>
    
            <form className="w-80" method="POST" action="" >
                <p className="font-light text-sm">Football</p>
                <h2 className="mt-4 font-bold italic text-3xl">Strikeforce</h2>
                <p className="mt-4">Chaussure de football à crampon pour terrain sec</p>
                <p className="mt-4 font-bold text-xl">119,99€</p>
                <label className="mt-8 block" >Sélectionner la taille :</label>
                <select className="mt-4" >
                    <option value="">EU </option>
                    <option value="37">EU 37</option>
                    <option value="38">EU 38</option>
                    <option value="39">EU 39</option>
                    <option value="40">EU 40</option>
                    <option value="41">EU 41</option>
                    <option value="42">EU 42</option>
                    <option value="43">EU 43</option>
                    <option value="44">EU 44</option>
                    <option value="45">EU 45</option>
                    <option value="46">EU 46</option>
                </select>    
                <p className="mt-2 text-sm underline"><a href="">Guide des tailles</a></p>
                <button className="mt-8 w-full py-2 bg-black text-white" type="submit" name="panier">Ajouter au panier</button>
                <button className="mt-2 w-full py-2 border flex justify-center gap-4 items-center border-black text-black" type="submit">Favoris<span><img src={heart} alt="" /></span></button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default Produit;