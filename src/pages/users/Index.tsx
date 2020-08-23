import React, { Component } from 'react'
import Welcome from './Welcome'
import Login from './Login'
import { AppConsumer} from "./../../context/AppContext"

export default class Index extends Component {
    render() {
        return (
            <AppConsumer>
                {
                    ({auth})=>{
                        return auth ? <Welcome></Welcome> : <Login></Login>
                    }
                }
                
            </AppConsumer>
        )
    }
}

