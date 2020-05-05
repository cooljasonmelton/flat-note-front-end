export default function manageLogin(state = {
    username: "",
    }, action) {
    switch (action.type) {
        case 'LOGIN_USERNAME':
            return { username: action.payload.username };
        case 'LOGOUT_USERNAME':
            return {username: ""}
        default:
            return state;
    }
    
}