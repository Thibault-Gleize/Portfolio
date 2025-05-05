import './projectcard.scss'
import { useState } from 'react';
import ProjectModal from '../projectModal/projectModal';

export default function ProjectCard (prop) {

    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);}

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

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
                    <button onClick={() => handleOpenModal(prop)} className='view-more'>Voir Plus</button>
                </div>
            </div>

            <ProjectModal 
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                project={selectedProject}
            />
        </figure>
    )
}