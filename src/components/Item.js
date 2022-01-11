import React from 'react'

const Item = (props) => {
    const handleRemove = () => {
        props.removeTask(props.index)
    }
    return (
        <div className='ItemContainer'>
            <div className="ItemContent">
                {props.item}
            </div>
            <button className="deleteButton" onClick={handleRemove}>-</button>
        </div>
    )
}

export default Item
