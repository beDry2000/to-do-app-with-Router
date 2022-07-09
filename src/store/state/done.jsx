import TaskContext from "../TaskContext";
import { Link, Outlet } from 'react-router-dom';
import { useContext } from "react";


function Done() {

    const data = useContext(TaskContext);
    const tasks = data.todos;


    return (
        <div>
            <h1>List of Completed Tasks</h1>
            <div style={{ width: ' 40%' }}>
                {
                    tasks
                        .filter(task => task.done === true)
                        .map(task => (
                            <>
                                <Link
                                    to={`${task.id}`}
                                    key={task.id}>
                                    <p>{task.name}</p>

                                </Link>
                            </>
                        ))
                }

            </div>
            <div>
                <Outlet />
            </div>
            
        </div>
    )
}
export default Done;