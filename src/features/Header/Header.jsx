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
                    <li>Accueil</li>
                    <li>A propos de moi</li>
                    <li>Compétences</li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}