import React,{Component} from 'react'
/**
 * 1.创建一个context：React.createContext()
 * 2.添加默认值：defaultValue={key:str|number|boolen|fn|...}
 * 3.解构出Provider与Consumer
 * 4.生成一个类组件
 * 5.render函数return时包在最外层
 * 6.Provider的value属性是一个以defaultValue同key的对象:<Provider value={obj}></Provider>
 */

 interface IProps{

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
let {Provider,Consumer} = React.createContext(defaultValue)

class AppProvider extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
        this.state={
            auth:false,
            username:''
        }
    }
    render(){
        return (
            <Provider value={{
                auth:this.state.auth,
                username:'sss',
                signin:()=>{}
            }}>

            </Provider>
        )
    }
}