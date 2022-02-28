
// creates global state

const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {

    // ACTIONS
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }

        case 'decrement':
            return {
                counter: state.counter - 1
            }

        case 'add':
            return {
                counter: state.counter + action.valueSent
            }

        case 'subtract':
            return {
                counter: state.counter - action.payload
            }

    }



    return state
}


export default reducer
