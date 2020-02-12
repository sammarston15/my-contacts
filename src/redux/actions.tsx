export const getContacts = (contacts: any) => {
    return {
        type: 'GET_CONTACTS',
        payload: contacts
    }
}

export const loginUser = () => {
    return {
        type: 'LOGIN_USER'
    }
}