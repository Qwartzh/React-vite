import { useState } from "react"

function Header() {

    const [color, setColor] = useState("text-blue-500");
    const changeColor = () => {
        setColor("text-red-500");
    }

    return (
        <header>
            <h1 className="text-3xl text-red-500 bg-slate-100 p-5 rounded-md flex  justify-center"
            onClick={changeColor}>
                Welcome to React
            </h1>
            <p className={`text-2xl ${ color} bg-slate-400 p-5 rounded-md flex justify-center`}>
                Edit <code>src/App.jsx</code> and save to reload.
            </p>
        </header>
    )
}

export default Header