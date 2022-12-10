import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import './styles/ThemeSwitcher.scss'

function ThemeSwitcher(props) {

    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return (
        <button className="mode-switcher-container" onClick={() => setMode(mode => (mode === "dark" ? "light" : "dark"))}> 

            <div className="icon icon1"><BsSunFill /></div>
            <div className="icon icon2"><BsMoonStarsFill /></div>
    
        </button>
    );
}

export default ThemeSwitcher