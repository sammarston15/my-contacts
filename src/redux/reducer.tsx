const initialState = {
    contacts: [],
    user: {},
    isLoggedIn: false
}

export default function reducer(state=initialState, action: any) {
    switch(action.type) {
        case 'GET_CONTACTS':
            return {...state, contacts: action.payload};
        case 'LOGIN_USER':
            return {...state, isLoggedIn: true};
        default: return state;
    }
}