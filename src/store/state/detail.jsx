import { useParams } from 'react-router-dom';
import TaskContext from '../TaskContext';
import { useContext } from 'react';

export default function Detail() {
    let data = useContext(TaskContext);
    let params = useParams();
    let todo = data.getTask(parseInt(params.todoId), 10);
    return (
        <div >
            <h3>Task #{todo.id}</h3>
            <p>Task name: {todo.name}</p>
        </div >
    )

}