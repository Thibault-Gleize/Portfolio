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
                <ul>
                    <a href=""><li><i className="fa-solid fa-house"></i>Accueil</li></a>
                    <a href=""><li><i className="fa-solid fa-user"></i>A propos de moi</li></a>
                    <a href=""><li><i className="fa-solid fa-bullseye"></i>Compétences</li></a>
                    <a href=""><li><i className="fa-solid fa-diagram-project"></i>Projets</li></a>
                    <a href=""><li><i className="fa-solid fa-envelope"></i>Contact</li></a>
                </ul>
            </nav>
        </header>
    )
}