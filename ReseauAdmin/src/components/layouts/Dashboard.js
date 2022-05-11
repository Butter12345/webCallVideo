import React from "react";
import Card from "./Card";

function Dashboard() {
    return (
        <>
            <nav className="w-full flex flex-row justify-between px-10 py-5 border-b-2 shadow-lg">
                <div className="text-xl">
                <img className="w-8 h-8" src="LogoENSPY.jpg" alt='logo'/>
                </div>
                <div>
                    <ul className="flex flex-row justify-between">
                        <li className="mx-2 pt-1">
                           <span>Profil</span>
                        </li>
                        <li className="mx-2 pt-1">
                            <a href="#">
                                Déconnexion
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mx-auto min-w-full h-screen px-10 relative">
                <h1 className="text-5xl font-bold py-2">Bibliothèque</h1>
                <div className="grid grid-cols-3 gap-2">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="absolute bottom-5 right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 object-cover rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                </div>
            </div>
        </>
    )
}

export default Dashboard;