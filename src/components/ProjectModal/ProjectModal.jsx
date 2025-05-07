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
                    <button>Repo GitHub</button>
                    <button>Demo</button>
                </div>
            </div>
            <div className="modal-img">
                <img src={project.img} alt={`Aperçu du projet ${project.name}`} />
            </div>
        </ReactModal>
    )
}