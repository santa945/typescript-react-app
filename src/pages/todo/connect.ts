import { connect } from 'react-redux'
import { ITodo } from '../../store/types'
import { Dispatch} from 'redux'

type Todos = {
    todos: Array<ITodo>
}

let id = 1;
const mapStateToProps = (state:Todos)=>{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch:Dispatch)=>{
    return {
        add:(txt:string)=>{
            dispatch({
                type:"ADD_TODO",
                id: id++,
                text: txt
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)