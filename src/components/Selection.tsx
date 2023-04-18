import React from "react";
import maillotVelocity from "../assets/maillot-velocity.png"
import maillotUltimate from "../assets/maillot-ultimate.png"
import maillotFitTech from "../assets/maillot-fit.png"

interface Maillot {
    nom: string,
    prix: number,
    description: string,
    libelle: string
};

const velocity: Maillot = {
    nom: "Velocity Fit",
    prix: 40,
    description: "Maillot d'entrainement",
    libelle: "Football"
};
const ultimate: Maillot = {
    nom: "Ultimate Fit",
    prix: 35,
    description: "Maillot d'entrainement",
    libelle: "Football"
};
const fitTech: Maillot = {
    nom: "FitTech",
    prix: 40,
    description: "Maillot d'entrainement",
    libelle: "Football"
};

const Selection = () =>{
    return (
        <div className="px-24 pt-16">
            <h2 className="text-3xl font-bold">Notre sélection</h2>

            <div className="flex justify-between mt-8 gap-16">
                <div>
                    <a href="produit"><img src={maillotVelocity} alt="" /></a>
                    <a className="font-bold pt-5" href="produit">{velocity.nom}</a>
                    <p className="mt-5">{velocity.description}</p>
                    <p className="text-sm font-light">{velocity.libelle}</p>
                </div>
                <div>
                    <a href="produit"><img src={maillotUltimate} alt="" /></a>
                    <a className="font-bold pt-5" href="produit">{ultimate.nom} </a>
                    <p className="mt-5">{ultimate.description} </p>
                    <p className="text-sm font-light">{ultimate.libelle} </p>
                </div>
                <div>
                    <a href="produit"><img src={maillotFitTech} alt="" /></a>
                    <a className="font-bold pt-5" href="produit">{fitTech.nom} </a>
                    <p className="mt-5">{fitTech.description}</p>
                    <p className="text-sm font-light">{fitTech.libelle} </p>
                </div>
            </div>
        </div>
    );
}

export default Selection;