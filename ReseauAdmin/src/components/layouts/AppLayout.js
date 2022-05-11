import React from "react";
import Polytech from "../illustrations/polytech";

function AppLayout({ children }) {
    return (
        <div className="flex min-h-screen w-full">
            <div className="w-1/3 bg-gray-100">
                <div className="h-full flex flex-col items-center justify-center ">
                    <h1 className="font-bold text-center text-2xl mb-2">Ecole nationale supérieure polytechnique</h1>
                    <Polytech/>
                </div>
            </div>
            <div className="w-2/3 flex items-center justify-center">
                <div className="w-3/5">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AppLayout;