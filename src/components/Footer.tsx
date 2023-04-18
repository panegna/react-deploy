import React from "react";
import logo from "../assets/logo-v2-white.png";

const Footer = () =>{
    return (
        <>
        <div className="bg-secondary flex justify-center">
            <div className="py-12">
                <h2 className="text-3xl font-bold text-white">Inscrivez-vous à la newsletter et profitez de -10%</h2>
                <form method="POST" className="pt-14" action="">
                    <div className="items-center justify-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-80">
                            <input name="email" placeholder="Entrez votre adresse mail" type="email" id="email" className="block p-3 pl-10 w-full text-base font-sans text-bleu focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 outline-bleu dark:focus:ring-primary-500 " autoComplete="off" />
                        </div>
                        <div>
                            <button type="submit" name="newsletter" className="py-3 px-5 w-full text-base font-bold font-sans text-center text-bleu  cursor-pointer bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">S'inscrire</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="text-white bg-black px-24">
        <div className="pt-12" >
           <a href=""><img className="w-14" src={logo} alt="" /></a> 
        </div>

        <nav className="pt-16">
            <ul className="flex gap-5">
                <li className="w-44">
                    <h3 className="text-xl font-bold mb-12">INFORMATION</h3>
                    <p className="hover:underline">
                        <a href="">Accessibilité</a> 
                    </p>
                    <p className="mt-4 hover:underline">
                        <a href="">Politique de cookies</a>  
                    </p>
                    <p className="mt-4 hover:underline">
                        <a href="">Politique de confidentialité</a>
                    </p>
                    <p className="mt-4 hover:underline">
                        <a href="">Conditions générales d'utilisation</a>
                    </p>
                </li>
                <li className="w-44">
                    <h3 className="text-xl font-bold mb-12">BOUTIQUE</h3>
                    <p className="hover:underline">
                        <a href="">Politique d'annulation et de retour</a>
                    </p>
                    
                </li>
                <li className="w-44">
                    <h3 className="text-xl font-bold mb-12">ASSISTANCE</h3>
                    <p className="hover:underline">
                        <a href="">FAQs</a>
                    </p>
                    <p className="mt-4 hover:underline">
                        <a href="">Aide</a>
                    </p>
                    <p className="mt-4 hover:underline">
                        <a href="">Nous contacter</a>
                    </p>     
                </li>
            </ul>
        </nav>

        <nav>
            <ul className="flex justify-end pt-16 gap-4 pb-8">
                <li className="hover:underline"><a href="">Instagram</a></li>
                <li className="hover:underline"><a href="">Youtube</a></li>
                <li className="hover:underline"><a href="">Facebook</a></li>
                 <li className="hover:underline"><a href="">Twitter</a></li>
            </ul>
        </nav>

    
    
</div>
        </>
    );
}

export default Footer;