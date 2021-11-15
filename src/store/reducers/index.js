export default function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'multiply7':
            return { ...state, number: state.number * 7 }
        case 'divisor25':
            return { ...state, number: state.number / 25 }
        case 'parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'setNumber':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload} }
        default:
            return state
    }
}