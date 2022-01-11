import React, { useState } from 'react'

const Add = (props) => {
    const[res,setRes] = useState("")
    const handleChange = (e) => {
        setRes(e.target.value);
    }
    const handleSubmit = (e) =>{
        props.submitHandler(res)
        e.preventDefault()
        setRes("");
    }
    return (
        <form onSubmit={handleSubmit} action=''>
            <input type="text" name="" onChange={handleChange} value={res}/>
            <input type="button" value="+" onClick={handleSubmit}/>
        </form>
    )
}

export default Add
