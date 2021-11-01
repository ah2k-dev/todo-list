import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

export const Information = () => {
    let [newdescription, setDescription] = useState('');
    let [newtime, setTime] = useState('');
    let { addItem } = useContext(TodoContext)

    const btn_submit = (ev) => {
        ev.preventDefault();
        // console.log(description, date, time)
        addItem({
            description: newdescription,
            time: newtime
        })
        ev.target.reset();
        setDescription('')
        setTime('')
    }
    return (
        <div className="info-container" onSubmit={btn_submit}>
            <h3>Enter Information</h3><hr />
            <form className="information">
                <label>Description:</label><input type='text' required onChange={(ev) => setDescription(ev.target.value)} /><br />
                <label>Time:</label><input type='Time' required onChange={(ev) => setTime(ev.target.value)} /><br />
                <input id="btn" type='submit' value='Add Item' />
            </form>
        </div>
    )
}