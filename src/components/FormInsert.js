import React from 'react'
import { useState } from 'react'




const FormInsert = ({ addObjectives, showFormObj }) => {

    const [objective, setObjetive] = useState('')
    const [prazoDate, setPrazoDate] = useState('')
    const [prazoTime, setPrazoTime] = useState('')
    const [reminder, setReminder] = useState(false)
    const [comments, setComments] = useState('')


    const clearAllState = () => {
        setObjetive('')
        setPrazoDate('')
        setPrazoTime('')
        setReminder(false)
        setComments('')
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // if (!objective || !prazoDate || !prazoTime) {
        //     alert("Objetivo incompleto")
        //     return
        // }

        // addTask({ objective, prazoDate, prazoTime, reminder, comments })
        // addObjectives({ nome, data, reminde, obs })

        clearAllState()
        showFormObj()

    }

    return (
        <div className='forminsert'>
            <span>Novo Objetivo</span>
            <form onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="objective" placeholder="Objetivo" name='objective' value={objective} onChange={(e) => { setObjetive(e.target.value) }} />
                    <label htmlFor="objective">Objetivo</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="prazo_date" name='prazo_date' value={prazoDate} onChange={(e) => { setPrazoDate(e.target.value) }} />
                    <label htmlFor="prazo_date">Data - Prazo</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="time" className="form-control" id="prazo_time" name='prazo_time' value={prazoTime} onChange={(e) => { setPrazoTime(e.target.value) }} />
                    <label htmlFor="prazo_time">Hora - Prazo</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={reminder} onChange={(e) => { setReminder(e.currentTarget.checked) }} id="reminder" />
                    <label className="form-check-label" htmlFor="reminder">
                        Prioritário
                    </label>
                </div>

                <div className="form-floating">
                    <textarea className="form-control" placeholder="Observações" id="comments" value={comments} onChange={(e) => { setComments(e.target.value) }}></textarea>
                    <label htmlFor="comments">Comments</label>
                </div>
                <div className='flexitensgap'>
                    <button type="submit" className="btn btn-primary" value='savetask'>Avançar</button>
                    <button type="button" className="btn btn-primary" onClick={showFormObj}>Cancelar</button>
                </div>
            </form >
        </div >
    )
}


export default FormInsert