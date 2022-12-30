import React, { useState, useEffect } from 'react';



const EditTask = ({ task, showFormEditTask }) => {

    const [feito, setFeito] = useState(task.feito)
    const [comments, setComments] = useState(task.obs)


    return (

        <>
            <div className='formedittask'>
                <span>Editar Tarefa</span>
                <form >

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={feito} onChange={(e) => { setFeito(e.currentTarget.checked) }} id="feito" />
                        <label className="form-check-label" htmlFor="feito">
                            Finalizada
                        </label>
                    </div>

                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Observações" id="comments" value={comments} onChange={(e) => { setComments(e.target.value) }}></textarea>
                        <label htmlFor="comments">Comments</label>
                    </div>
                    <div className='flexitensgap'>
                        <button type="submit" className="btn btn-primary" value='savetask'>Avançar</button>
                        <button type="button" className="btn btn-primary" onClick={showFormEditTask}>Cancelar</button>
                    </div>
                </form >
            </div >
        </>



    )
}

export default EditTask