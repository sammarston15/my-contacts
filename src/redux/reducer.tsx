const initialState = {
    contacts: [],
    user: {}
}

export default function reducer(state=initialState, action: any) {
    switch(action.type) {
        case 'GET_CONTACTS':
            return {...state, contacts: action.payload};
        default: return state;
    }
}