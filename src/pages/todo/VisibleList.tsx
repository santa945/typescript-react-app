import React, { Component } from 'react'
import TodoItem from '../../components/TodoItem'
import connect from './connect'
import { ITodo } from '../../store/types'

type IProps = {
    todos: Array<ITodo>
}
class VisibleList extends Component<IProps> {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((item,index)=>{
                        return <TodoItem {...item} key={index}></TodoItem>
                    })
                }
            </ul>
        )
    }
}

export default connect(VisibleList)