import React, { Component } from 'react'
import TodoItem from '../../components/TodoItem'
import connect from './connect'
import { ITodo } from '../../store/types'

type IProps = {
    todos: Array<ITodo>
}
class VisibleList extends Component<IProps> {
    render() {
        console.log('this.props:',this.props);
        
        return (
            <ul>
                {
                    this.props.todos.map(item=>{
                        return <TodoItem {...item}></TodoItem>
                    })
                }
            </ul>
        )
    }
}

export default connect(VisibleList)