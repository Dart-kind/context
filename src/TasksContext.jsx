import {createContext, useContext, useReducer} from "react";

//  Передаем null. Контекст должен инициализироваться каким либо динамическим значение
const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider ({children}) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks ()  {
    return useContext(TasksContext)
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext)
}

const ADDED_TASKS = 'added'
const CHANGED_TASKS = 'changed'
const Deleted_TASKS = 'deleted'

const initialTasks = []


function tasksReducer(tasks, action) {
 switch (action.type) {
     case  ADDED_TASKS: {
         return [
             ...tasks,
             {
                 id: action.id,
                 text: action.text,
                 done: false
             },
         ];
     }
     case CHANGED_TASKS: {
         return tasks.map((t) => {
             if(t.id === action.task.id) {
                 return action.task
             } else {
                 return t
             }
         })
     }
     case Deleted_TASKS: {
         return tasks.filter((t) => t.id !== action.id)
     }
     default: {
         throw Error('Unknown error' + action.type)
     }
 }
}

