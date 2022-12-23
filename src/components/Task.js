import React from 'react'

const Task = (props) => {
    let { tasks } = props.state
    let { reminder } = props

    return (
        <>
            {tasks.map(task => {
                return (
                    <li key={task.taskid} className="list-group-item" onDoubleClick={() => { reminder(task.taskid) }}>{task.nome}</li>
                )
            })}

        </>)
}

export default Task