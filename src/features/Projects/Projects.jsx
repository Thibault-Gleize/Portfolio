import './projects.scss'
import ProjectsData from '../../assets/datas/projects_datas.json'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Projects () {

    const projects_list = ProjectsData.projects

    return (
        <section className='projects section'>
            <div className='title'>
                <h3>Mes projets</h3>
            </div>
            <ul className='project-list'>
                {projects_list.map((project) => <li key={project.name}><ProjectCard name={project.name} img={project.image_path} description={project.description} skills={project.skills} /></li>)}
            </ul>
        </section>
    )
}