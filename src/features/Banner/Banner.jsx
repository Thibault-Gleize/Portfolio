import './banner.scss';


export default function Banner () {

    const names = ["Thibault Gleize", "Intégrateur web", "Designer Web", ]

    return (
        <section className='banner'>
            <h2>
                <span className='banner-change'>Hello World &#x1F30D;
                <br/>
                Je suis {names[0]}, 
                </span> Du code sur mesure pour votre projet, avec la passion d'un junior et la rigueur d'un pro !</h2>
            <button>Apprenez en plus sur moi &#x270C;</button>
        </section>
    )
}