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
                    <h4>Grâce à mon expérience dans les centres d'appels, j'ai acquis la compétence d'écouter attentivement les utilisateurs et de trouver des solutions efficaces. Ces compétences me guident actuellement dans mon travail d'intégration web, où je me concentre sur la création d'interfaces qui allient simplicité d'utilisation et performance technique.</h4>
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