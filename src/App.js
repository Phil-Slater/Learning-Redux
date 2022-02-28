import DisplayCounter from "./components/DisplayCounter";
import { connect } from 'react-redux'
import IncrementDecrementCounter from "./components/IncrementDecrementCounter";
import AddSubtractCounter from "./components/AddSubtractCounter";

function App(props) {
  return (
    <div >
      <h1>App</h1>
      <h1>Global Counter in App component: {props.counter}</h1>
      <DisplayCounter />
      <IncrementDecrementCounter />
      <AddSubtractCounter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App)
