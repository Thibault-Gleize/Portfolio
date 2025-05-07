import './banner.scss';


export default function Banner () {

    return (
        <section className='banner'>
            <h2>
                Hello World &#x1F30D;
                <br/>
                Je suis Thibault Gleize, 
                <br/>
                Je vous propose du code sur mesure pour votre projet, avec la passion d'un junior et la rigueur d'un pro !
            </h2>
            <a href="#about-me"><button>Apprenez en plus sur moi &#x270C;</button></a>
        </section>
    )
}