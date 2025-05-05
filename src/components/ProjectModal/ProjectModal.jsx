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
            <div className="modal-img">
                <img src={project.img} alt={`Aperçu du projet ${project.name}`} />
            </div>
            <div className="modal-content">
                <p>{project.description}</p>
                
            </div>
        </ReactModal>
    )
}