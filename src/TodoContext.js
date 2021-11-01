import React, { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
 
const initialList = [
    // { description: 'Code',  time: '07:12'},
    // { description: 'Eat',  time: '09:12'},
    // { description: 'Sleep',  time: '01:12'}
];
export const TodoContext = createContext(initialList);    
export const TodoProvider = ({children}) => {
    let [state, dispatch] = useReducer(TodoReducer, initialList)
    function addItem(obj){
        dispatch({
            type: 'Add-item',
            payload: {
                id: Math.floor(Math.random()*1000),
                description: obj.description,
                time: obj.time
            } 
        })
        // console.log(obj.id)
    }
    function deleteItem(id){
        dispatch({
            type: 'Delete-item',
            id: id
        })
    }
    return(
        <TodoContext.Provider value = {{
            list: state,
            addItem,
            deleteItem
        }}>
            {children}
        </TodoContext.Provider>
    )
}