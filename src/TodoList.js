import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
const TodoList = () => {
    let {list, deleteItem} = useContext(TodoContext)
    return (
        <div>
            <div className="list-container">
                <h3>Todo List</h3><hr />
                <div className="box">
                    <span className="time"><strong>Time</strong></span>
                    <span className="desc"><strong>Description</strong></span>
                </div>
                {list.map((value, index) => {
                    // console.log(value.id)
                    return (
                        <div key={index} className="box">
                            <span className="time">{value.time}</span>
                            <span className="desc">{value.description}</span>
                            <span><button className="x" onClick={() => deleteItem(value.id)}>&#10060;</button></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TodoList;