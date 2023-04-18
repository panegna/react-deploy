import React from "react";

const Hero = () =>{
    return (
        <div className="w-full h-screen bg-center bg-cover bg-strikeforce">
            <div className="pr-24 pl-48 pt-36">
                <div>
                    <p className="font-mono text-3xl font-bold py-1.5 w-72 bg-black text-white">NOUVEAUTÉ</p>
                    <h1 className="font-sans text-6xl font-bold italic pt-1">STRIKEFORCE</h1>
                    <p className="font-sans text-base w-96 pt-1.5">Dominez le terrain avec les crampons StrikeForce. Une adhérence supérieure et un ajustement précis vous donnent l'avantage dont vous avez besoin pour des mouvements explosifs. Avec StrikeForce, vous êtes prêt à tout.</p>
                    <a href="produit">
                    <button className="py-4 px-8 border-4 border-black mt-10" >Achetez Maintenant</button>
                    </a>
                    <a className="flex mt-6 hover:underline" href="produit">En savoir plus</a>
            </div>
    </div>
        </div>
    );
}

export default Hero;