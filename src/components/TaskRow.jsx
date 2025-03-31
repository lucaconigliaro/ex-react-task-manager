export default function TaskRow({ task }) {

    // Funzione per determinare la classe in base allo stato del task
    const getStatusClass = (status) => {
        if (status === "To do") 
            return "bg-danger text-white"; 
        else if (status === "Doing") 
            return "bg-warning text-dark"; 
        else if (status === "Done") 
            return "bg-success text-white";
        return ""; 
    };

    return (
        <tr>
            <td>{task.title}</td>
            <td className={getStatusClass(task.status)}>{task.status}</td>
            <td>{task.createdAt}</td>
        </tr>
    );
};