import './aboutme.scss';
import CV from '../../assets/datas/Thibault_Gleize_CV.pdf'

export default function AboutMe () {
    return(
        <section id='about-me' className='about-me section'>
            <div className='title'>
                <h3> A propos de moi </h3>
            </div>
            <div className='presentation'>
                <div className='portrait'></div>
                <div className='description'>
                    <h4>Passé par le monde des centres d'appels, j'y ai appris à écouter les utilisateurs et à chercher des solutions efficaces. Ces compétences me guident aujourd'hui dans mon travail d'intégration web, où je m'efforce de bâtir des interfaces qui allient simplicité d'usage et performance technique.</h4>
                    <h5>Mon objectif &#x1F3AF;
                    <br /> 
                    Allier rigueur technique et approche centrée utilisateur pour créer des sites intuitifs, rapides et efficaces, tout en m'appuyant sur des données concrètes pour prendre les bonnes décisions.
                    </h5>
                    <div className='descriptions__buttons'>
                        <a className='description__button' href={CV} target='_blank'>Mon CV</a>
                        <a className='description__button' href="#skills">Mes compétences</a>
                        <a className='description__button' href="#projects">Mon portfolio</a>
                    </div>
                </div>
            </div>
        </section>
    )
}