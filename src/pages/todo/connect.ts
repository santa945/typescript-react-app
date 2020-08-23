import { connect } from 'react-redux'
import { ITodo } from '../../store/types'
import { Dispatch} from 'redux'

type Todos = {
    todos: Array<ITodo>
}

const mapStateToProps = (state:Todos)=>{
    console.log('state:',state);
    
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch:Dispatch)=>{
    return {
        add:()=>{
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)