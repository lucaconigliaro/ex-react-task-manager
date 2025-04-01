import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function TaskDetail() {
    const { id } = useParams(); // Prende l'ID dall'URL
    const { tasks, removeTask, getTasks } = useContext(GlobalContext);
    const navigate = useNavigate();

    // Trova il task con quell'ID
    const task = tasks.find(task => task.id.toString() === id);
    if (!task) return;

    const handleDelete = async () => {
        try{
            await removeTask(task.id);
            await getTasks();
            alert("Task eliminato con successo");
            navigate('/')

        }catch (err) {
            alert("Errore durante l'eliminazione del task:", err.message)
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-start" >
            <div className="card bg-dark text-white" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{task.title}</h3>
                    <p className="card-subtitle mb-2">{task.createdAt}</p>
                    <p className="card-text">{task.description}</p>
                    <p>{task.status}</p>
                    <div className="mt-auto d-flex justify-content-end">
                        <button className="btn btn-danger"
                            onClick={handleDelete}>
                            Elimina Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};