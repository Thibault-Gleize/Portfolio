import './projectcard.scss'

export default function ProjectCard (prop) {

    

    return (
        <figure className='project-card'>
            <div className='card-img'>
                <img src={prop.img} alt={`Aperçu du site ${prop.name}`} />
            </div>  
            <div className='card-text-and-btn'>
                <div className='card-text'>
                    <h4>{prop.name}</h4>
                </div>
                <div className='card-btn'>
                    <button className='view-more'>Voir Plus</button>
                </div>
            </div>
        </figure>
    )
}