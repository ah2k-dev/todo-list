export const TodoReducer = ((state, action) => {
    switch(action.type){
        case 'Add-item':{
            return [action.payload, ...state]
        }
        case 'Delete-item':{
            return[...state.filter(list => list.id !== action.id)]
        }
        default:{
            return [state]
        }   
    }
})