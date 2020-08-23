import React,{Component, ReactNode} from 'react'
/**
 * 1.创建一个context：React.createContext()
 * 2.添加默认值：defaultValue={key:str|number|boolen|fn|...}
 * 3.解构出Provider与Consumer
 * 4.生成一个类组件
 * 5.render函数return时包在最外层
 * 6.Provider的value属性是一个以defaultValue同key的对象:<Provider value={obj}></Provider>
 */

 interface IProps{
    children: ReactNode
 }

 type IState={
     auth: boolean,
     username: string,
 }
const defaultValue = {
    auth:false,
    username:'',
    signin:()=>{}
}
let {Provider,Consumer:AppConsumer} = React.createContext(defaultValue)

class AppProvider extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
        this.state={
            auth:false,
            username:''
        }
    }
    signIn = ()=>{
        this.setState({
            auth:true,
            username:'John'
        })
    }
    render(){
        return (
            <Provider value={{
                auth:this.state.auth,
                username:this.state.username,
                signin:()=>this.signIn()
            }}>
                {
                    this.props.children
                }
            </Provider>
        )
    }
}

export {
    AppProvider,
    AppConsumer
}