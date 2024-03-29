import {useState} from "react";
import {useTasksDispatch} from "./TasksContext.jsx";

export default function  AddTask() {
const [text, setText] = useState('')
    const dispatch = useTasksDispatch()
    return (
        <>
        <input
        placeholder={'add text'}
        value={text}
        onChange={e => setText(e.target.value)}
        />
            <button onClick={ () => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text
                })
            }} >Add</button
                >
        </>
    )
}

let nextId = 0
