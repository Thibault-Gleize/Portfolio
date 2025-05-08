import "./projectmodal.scss"
import ReactModal from "react-modal";

export default function ProjectModal ({isOpen, onRequestClose, project }) {
    if (!project) return null;

    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={`Détails du projet ${project.title}`}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header">
                <h2 className="modal-title">{project.name}</h2>
                <button onClick={onRequestClose} className="close-btn">&times;</button>
            </div>
            <div className="modal-body">
                <p className="modal-text">Description : {project.description}</p>
                <div className="modal-body-btns">
                    <a href={project.repo} target="_blank"><button className="modal-body-btn">Repo GitHub</button></a>
                    {project.demo === "" ? null : <a href={project.demo} target="_blank"><button className="modal-body-btn">Demo</button></a>}
                </div>
                <p className="modal-text">Compétences utilisés : {project.skills}</p>
            </div>
            <div className="modal-img">
                <img src={project.img} alt={`Aperçu du projet ${project.name}`} />
            </div>
        </ReactModal>
    )
}