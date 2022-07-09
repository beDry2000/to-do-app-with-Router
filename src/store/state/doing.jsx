import TaskContext from "../TaskContext";
import { Link, Outlet } from 'react-router-dom';
import { useContext } from "react";


function Doing() {

    const data = useContext(TaskContext);
    const tasks = data.todos;

    const onDone = (_, id) => {
        data.handleDone(id)
    }


    return (
        <div>
            <h1>Doing Task</h1>



            <div style={{ width: ' 40%' }}>
                {
                    tasks
                        .filter(task => task.doing === true)
                        .map(task => (
                        <>
                            <Link
                                to={`${task.id}`}
                                key={task.id}>
                                <p style={{ display: 'inline-block' }}>{task.name}</p>

                            </Link>
                            <button
                                style={{ marginLeft: '20px' }}
                                onClick={e => onDone(e, task.id)}
                            >Done</button>
                            <br />
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
export default Doing;