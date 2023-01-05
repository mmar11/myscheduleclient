import React, { useState, useEffect } from 'react';



const EditTask = ({ task, key }) => {

    const [feito, setFeito] = useState(task.feito)
    const [comments, setComments] = useState(task.obs)

    const [showEditTask, setShowEditTask] = useState(false)

    const showFormEditTask = (id) => {
        setShowEditTask(!showEditTask)
    }


    console.log(feito)
    return (


        <div className='formedittask'>
            <span>Editar Tarefa</span>
            <form >
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Observações" id="comments" value={comments} onChange={(e) => { setComments(e.target.value) }}></textarea>
                    <label htmlFor="comments">Comments</label>
                </div>
                <div className='flexitensgap'>
                    <button type="submit" className="btn btn-primary" value='savetask'>Avançar</button>
                    <button type="button" className="btn btn-primary" value='concluida'>Concluir Tarefa</button>
                    <button type="button" className="btn btn-primary" onClick={showFormEditTask}>Cancelar</button>
                </div>
            </form >
        </div >




    )
}

export default EditTask