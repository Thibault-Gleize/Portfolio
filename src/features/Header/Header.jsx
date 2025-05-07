import './header.scss';
import logo from '../../assets/images/logo_TG.png'
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
                    className="menu"
                    onClick={() => openNav()}
                >
                </input>
            </div>
            <nav>
                <ul>
                    <a href="#about-me"><li><i className="fa-solid fa-user"></i>A propos de moi</li></a>
                    <a href="#skills"><li><i className="fa-solid fa-bullseye"></i>Compétences</li></a>
                    <a href="#degree"><li><i className="fa-solid fa-book"></i>Formation et expériences</li></a>
                    <a href="#projects"><li><i className="fa-solid fa-diagram-project"></i>Projets</li></a>
                    <a href="mailto:tibo.gleize@gmail.com"><li><i className="fa-solid fa-envelope"></i>Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}