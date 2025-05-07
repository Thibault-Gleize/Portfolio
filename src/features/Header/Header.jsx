import './header.scss';
import logo from '../../assets/images/logo_TG.png'


export default function Header () {

    return (
        <header>
            <div className='logo-and-name'>
                <img src={logo} alt='Logo du portfolio de Thibault Gleize'></img>
                <h1>Thibault Gleize</h1>
            </div>
            <nav>
                <svg id="hamburger" className="Header__toggle-svg" viewBox="0 0 60 40">
                    <g stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path id="top-line" d="M10,10 L50,10 Z"></path>
                        <path id="middle-line" d="M10,20 L50,20 Z"></path>
                        <path id="bottom-line" d="M10,30 L50,30 Z"></path>
                    </g>
                </svg>
                <ul>
                    <a href=""><li><i className="fa-solid fa-user"></i>A propos de moi</li></a>
                    <a href=""><li><i className="fa-solid fa-bullseye"></i>Compétences</li></a>
                    <a href=""><li><i className="fa-solid fa-book"></i>Formation et expériences</li></a>
                    <a href=""><li><i className="fa-solid fa-diagram-project"></i>Projets</li></a>
                    <a href=""><li><i className="fa-solid fa-envelope"></i>Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}