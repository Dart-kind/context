import {useTasks} from "./TasksContext.jsx";
import Task from "./ListItem.jsx";

export default function List() {
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}