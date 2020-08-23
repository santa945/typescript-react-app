import React, { Component } from 'react'
import { ITodo } from '../store/types'


export default class TodoItem extends Component<ITodo> {
    render() {
        return (
            <li>
                { this.props.text }
            </li>
        )
    }
}
