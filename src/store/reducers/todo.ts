import {ITodo} from '../types'
import {ITodoAciton} from '../action'

const todoReducers = (state:Array<ITodo>=[
    {
    id:0,
    text:'hello',
    completed:false
}],action:ITodoAciton)=>{
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        default:
            return state

    }
}

export default todoReducers