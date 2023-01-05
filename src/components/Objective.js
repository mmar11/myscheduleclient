import React from 'react'
import Task from './Task'

const Objective = (props) => {

    let { objectives, tasks, addTasks } = props
    return (


        <>
            {
                objectives.map((obj) => {
                    return (

                        <div key={obj.id_objetivo} id={obj.id_objetivo} className="card">

                            <h5 className="card-header">Objetivo: {obj.nome_objetivo}</h5>
                            <div className="card-body">
                                <h5 className="card-title">Obs: {obj.obs}</h5>
                                <p className="card-text">Prazo Objetivo: {obj.prazo_final ? obj.prazo_final.toLocaleString('pt-BR') : ''}</p>
                                <button type="button" className="btn btn-primary">Go somewhere</button>
                            </div>
                            <div className="card2 card" >
                                <ul className="list-group list-group-flush">
                                    <Task tasks={tasks} reminder={props.reminder} addTasks={addTasks} objid={obj.id_objetivo} />
                                </ul>
                            </div>
                        </div>


                    )

                })
            }

        </>
    )
}

export default Objective