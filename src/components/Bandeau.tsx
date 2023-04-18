import React from "react";

const Bandeau = () =>{
    return (
        <div className="px-24 pt-16 mb-16">
            <div className="w-full h-96 bg-cover bg-orange flex justify-end pr-36 pt-20">
                <div></div>
                <div>
                    <h2 className="text-3xl font-bold text-white " >Portez fièrement vos couleurs</h2>
                    <p className="text-white w-96 pt-4 mb-8">Avec sa technologie de pointe pour des performances inégalées et son design qui permet de porter fièrement vos couleurs, ce maillot de foot est l'expression parfaite de votre passion sur le terrain.</p>
                    <a href="produit"><button className="py-4 px-8 bg-white text-black" >Découvrir les maillots</button></a>
                 
                </div>
            </div>
        </div>
    );
}

export default Bandeau;