import { useState } from "react"

function Header() {



    return (
        <header>
            <h1 className="text-3xl text-red-500 bg-slate-100 p-5 rounded-md flex  justify-center">
                Welcome to React
            </h1>
            <p className="text-2xl text-blue-500 bg-slate-400 p-5 rounded-md flex justify-center">
                Edit <code>src/App.jsx</code> and save to reload.
            </p>
        </header>
    )
}

export default Header