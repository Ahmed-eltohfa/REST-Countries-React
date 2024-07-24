import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import './nav.css'

function Nav() {
    const [theme, setTheme] = useState('dark');
    const [colorVar, setColorVar] = useState("var(--back-light-color)");
    const [txtColor, setTxtColor] = useState("var(--text-light-color)");
    const [eleColor, setEleColor] = useState("var(--element-color)");

    useEffect(() => {
        if (theme === "dark") {
            setColorVar("var(--back-light-color)");
            setTxtColor("var(--text-light-color)");
            setEleColor("var(--back-light-color)");
        } else if (theme === "light") {
            setColorVar("var(--back-dark-color)");
            setTxtColor("var(--text-dark-color)");
            setEleColor("var(--element-dark-color)");
        }

        document.documentElement.style.setProperty("--back-color", colorVar);
        document.documentElement.style.setProperty("--element-color", eleColor);
        document.documentElement.style.setProperty("--txt-color", txtColor);
    }, [theme, colorVar, eleColor, txtColor])

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <div className='nav'>
            <div className="title">Where in the world?</div>
            <div className="darkMode" onClick={changeTheme}>
                <MdDarkMode fill="var(--txt-color)" size="18px" />
                Dark Mode
            </div>
        </div>
    )
}

export default Nav;