import React, { useState } from 'react';
import { connect } from 'react-redux'

function AddSubtractCounter(props) {

    const [value, setValue] = useState()

    const handleTextChange = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(value))
    }

    const handleSubtract = () => {
        props.onSubtract(parseInt(value))
    }


    return (
        <div>
            <h1>AddSubtractCounter</h1>
            <input type='text' onChange={handleTextChange} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({ type: 'add', valueSent: value }),
        onSubtract: (value) => dispatch({ type: 'subtract', payload: value })
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter)
