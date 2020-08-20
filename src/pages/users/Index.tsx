import React, { Component } from 'react'
import Welcome from './Welcome'
import Login from './Login'

export default class Index extends Component {
    render() {
        return (
            <div>
                { true ? <Welcome></Welcome> : <Login></Login> }
            </div>
        )
    }
}

