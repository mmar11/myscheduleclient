import React, { useState } from 'react'
import EditTask from './EditTask'

const Task = (props) => {
    let { tasks, reminder, objid } = props
    const [showEditTask, setShowEditTask] = useState(false)

    const showFormEditTask = (id) => {
        setShowEditTask(!showEditTask)
    }
    return (
        <>
            {tasks.map((task, i) => {

                if (objid === task.obj_id)


                    return (

                        <li id={task.id_tarefa} key={task.id_tarefa} className={`${task.reminde ? 'reminder' : ''}  list-group-item`} onDoubleClick={() => { reminder(task.id_tarefa) }}>
                            <div className='divtask' key={task.id_tarefa + '-div'}>
                                <span >{task.nome_tarefa}</span>
                                <span >coins total: {task.coins_total}</span>
                                <span >coins ganho: {task.ganho}</span>
                                <span >Prazo: {task.prazo_tarefa}</span>
                                <span >Obs: {task.obs}</span>
                            </div>

                            {!showEditTask && <button className="btn btn-primary" onClick={setShowEditTask} >Editar Tarefa</button>}
                            {showEditTask ? <EditTask key={task.id_tarefa}
                                task={task} showEditTask={showFormEditTask} /> : <></>}
                        </li>

                    )
            })}

        </>)
}

export default Task