import React, { Component } from 'react'
import AddTodo from './AddTodo'
import VisibleList from './VisibleList'

export default class Index extends Component {
    render() {
        return (
            <div>
                <AddTodo></AddTodo>
                <VisibleList></VisibleList>
            </div>
        )
    }
}
