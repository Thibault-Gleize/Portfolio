import './eduandexp.scss'
import EduAndExp_Data from "../../assets/datas/skills_edu.json"
import EduAndExpCard from '../../components/EduAndExpCard/EduAndExpCard'


export default function EduAndExp () {

    const educations_datas = EduAndExp_Data.education
    const experiences_datas = EduAndExp_Data.jobs

    return (
        <section id='degree' className='EduAndExp section'>
            <h3 className='title'>Diplômes et expériences Professionnelles</h3>
            <div className='edu-and-exp-container'>
                <div className='educations'>
                    <h4>Diplômes :</h4>
                    {educations_datas.map((edu) => <div key={edu.name} className='education'>
                    <EduAndExpCard 
                        name={edu.name}
                        from={edu.from}
                        date={edu.date}
                        niveau={edu.niveau}
                    /> </div>)}
                </div>
                <div className='separator'></div>
                    <div className='experiences'>
                        <h4>Expériences Professionnelles :</h4>
                        {experiences_datas.map((exp) => <div key={exp.name} className='experience'>
                            <EduAndExpCard 
                            name={exp.name}
                            from={exp.from}
                            date={exp.date}
                        /> </div>)}
                    </div>
            </div>
        </section>
    )
}