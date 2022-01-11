import React,{useState,useEffect} from 'react'
import Add from './Add'
import Item from './Item'
const AppContainer = () => {
    const[task,setTask] = useState([])
    const submitHandler = (value) => {
        setTask(oldArray => [...oldArray,value]);
    }
    const removeTask = (index) =>{
        setTask(oldArray => {
            return oldArray.filter((arrElem,id) => {
                return id !== index
            })
        });
    }
    return (
        <div className='appContainer'>
            <h1>To Do App</h1>
            <Add submitHandler={submitHandler}/>
            <div className="container">
            {
                task.map((data,index) => (<Item key={index} index={index} item={data} removeTask={removeTask}/>))
            }
            </div>
        </div>
    )
}

export default AppContainer
