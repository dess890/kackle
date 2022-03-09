export const ADD_BIO = 'ADD_BIO';



export const addBio = (text) => {
    return {
        type: ADD_BIO,
        text,
    };
}
