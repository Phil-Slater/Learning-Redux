import { connect } from 'react-redux'

function IncrementDecrementCounter(props) {

    const handleDecrement = () => {
        props.onDecrement()
    }

    const handleIncrement = () => {
        props.onIncrement()
    }

    return (
        <div>
            <h1>IncrementDecrementCounter</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({ type: 'decrement' }),
        onIncrement: () => dispatch({ type: 'increment' })
    }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)
