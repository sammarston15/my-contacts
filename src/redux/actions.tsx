export const getContacts = (contacts: any) => {
    return {
        type: 'GET_CONTACTS',
        payload: contacts
    }
}