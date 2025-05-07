import './myskills.scss'
import SkillsData from '../../assets/datas/skills_edu.json'


export default function MySkills () {
    const skillsList = SkillsData.skills

    return (
        <section className='skills section'>
            <div className='title'>
                <h3>Mes compétences</h3>
            </div>
            <ul className='skills-list'>
                {
                    skillsList.map((skill) => 
                        <li key={skill.name}>
                            <img src={skill.path} alt={`Logo de ${skill.name}`}></img>
                            <h4>{skill.name}</h4>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}