import { useState } from "react";

function Header() {
    const [color, setColor] = useState("text-slate-700");

    const changeColor = () => {
        setColor(prevColor => prevColor === 'text-slate-700' ? 'text-red-500' : 'text-slate-700');
    };

    return (
        <header className="flex flex-col items-center bg-slate-100 p-5">
            {/* Div avec fond gris et logo centré */}
            <div className="bg-slate-900 w-full h-96 flex items-center justify-center mb-5">
                <img
                    src="/logowhite.png"
                    className="w-auto h-96"
                    alt="logo"
                />
            </div>

            {/* Titre (h1) */}
            <h1
                className="text-3xl text-red-500 bg-slate-100 p-5 rounded-md flex justify-center"
                onClick={changeColor}
            >
                Welcome to React
            </h1>

            {/* Paragraphe */}
            <p className={`text-2xl ${color} bg-slate-400 p-5 rounded-md flex justify-center`}>
                Hello hello
            </p>
            
            {/* Deuxième logo */}
            <img src="/logosvg.svg" className="w-60 h-60 bg-stone-800 rounded-full" alt="logo" />
        </header>
    );
}

export default Header;
