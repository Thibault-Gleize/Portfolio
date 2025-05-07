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
                <h2>{project.name}</h2>
                <button onClick={onRequestClose} className="close-btn">&times;</button>
            </div>
            <div className="modal-body">
                <p>Description : {project.description}</p>
                <div className="modal-body-btns">
                    <a href=""><button>Repo GitHub</button></a>
                    <a href=""><button>Demo</button></a>
                </div>
                <p>Compétences utilisés : {project.skills}</p>
            </div>
            <div className="modal-img">
                <img src={project.img} alt={`Aperçu du projet ${project.name}`} />
            </div>
        </ReactModal>
    )
}