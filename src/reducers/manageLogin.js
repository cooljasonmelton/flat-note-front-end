export default function manageLogin(state = {
    username: "",
    }, action) {
    switch (action.type) {
        case 'LOGIN_USERNAME':
            return { 
                id: action.payload.id,
                username: action.payload.username,
                notes: action.payload.notes
            };
        case 'LOGOUT_USERNAME':
            return {username: ""}
        default:
            return state;
    }
    
}