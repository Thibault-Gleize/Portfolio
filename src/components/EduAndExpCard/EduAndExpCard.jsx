import './eduandexpcard.scss'

export default function EduAndExpCard (prop) {


    return (
        <figure className='edu-exp-card'>
            <p>{prop.date}</p>
            <h5>{prop.name} {prop.niveau}</h5>
            <h6>{prop.from}</h6>
        </figure>
    )
}