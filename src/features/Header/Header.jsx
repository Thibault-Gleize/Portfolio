import './header.scss';
import logo from '/logo_TG_min.png'
import { useState } from 'react';


export default function Header () {

    let [open, setOpen] = useState("default")

    function openNav() {
        setOpen(open === false || open === "default" ? open = true : open = false)
        const navLinks = document.querySelector("ul")
        open === false || open === "default" ? navLinks.style.display = "none" : navLinks.style.display = "flex"
    }

    return (
        <header>
            <div className='logo-and-name'>
                <img src={logo} alt='Logo du portfolio de Thibault Gleize'></img>
                <h1>Thibault Gleize</h1>
                <input 
                    type="checkbox" 
                    role="button" 
                    aria-label="Display the menu"
                    aria-pressed="true"
                    className="menu"
                    onClick={() => openNav()}
                >
                </input>
            </div>
            <nav>
                <ul>
                    <li><a href="#about-me"><i className="fa-solid fa-user"></i>A propos de moi</a></li>
                    <li><a href="#skills"><i className="fa-solid fa-bullseye"></i>Compétences</a></li>
                    <li><a href="#degree"><i className="fa-solid fa-book"></i>Formation et expériences</a></li>
                    <li><a href="#projects"><i className="fa-solid fa-diagram-project"></i>Projets</a></li>
                    <li><a href="mailto:tibo.gleize@gmail.com"><i className="fa-solid fa-envelope"></i>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}