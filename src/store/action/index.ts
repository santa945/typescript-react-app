const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'


export interface ITodoAciton {
    type: typeof ADD_TODO | typeof TOGGLE_TODO ,
    id: number,
    text: string
}
