import { connect } from 'react-redux'

function DisplayCounter(props) {
    return (
        <div>
            <h1>Global Counter in DisplayCounter component: {props.counter}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)
