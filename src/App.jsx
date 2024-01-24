import './App.css'
import {TasksProvider} from "./TasksContext.jsx";
import AddTask from "./AddTask.jsx";
import ListItem from "./ListItem.jsx";
import List from "./List.jsx";

function App() {
    return (
        <TasksProvider>
            <h1>Todo list</h1>
            <AddTask/>
            <List>
                <ListItem/>
            </List>
        </TasksProvider>
    )
}

export default App
