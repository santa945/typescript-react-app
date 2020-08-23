import React, { Component } from 'react'
import connect from './connect'
let textRef:React.RefObject<HTMLInputElement> = React.createRef();

type P = {
    add:(text:string)=>void
}
class AddTodo extends Component<P> {
    handleClick=()=>{
        //获取input里面的数据，有受控和非受控两种方式,ref为非受控非方式
        let txt = (textRef.current as HTMLInputElement).value
        //调用添加方法add,即是connect.ts中的add方法
        this.props.add(txt)
    }
    render() {
        return (
            <div>
                <input type="text" ref={textRef} />
                <button onClick={this.handleClick}>添加</button>
            </div>
        )
    }
}
export default connect(AddTodo)