import React from 'react'
import Task from './Task'

const Objective = (props) => {

    let { objectives } = props.state
    return (


        <>

            {objectives.map((obj) => {
                return (

                    <div key={obj.objid} id={obj.objid} className="card">

                        <h5 className="card-header">Objetivo: {obj.nome}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Obs: {obj.obs}</h5>
                            <p className="card-text">Prazo Objetivo: {obj.data}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card2 card" >
                            <ul className="list-group list-group-flush">
                                <Task state={props.state} reminder={props.reminder} />
                            </ul>
                        </div>
                    </div>


                )

            })}
        </>
    )
}

export default Objective