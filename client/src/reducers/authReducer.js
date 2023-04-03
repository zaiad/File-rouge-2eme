const user = JSON.stringify(localStorage.getItem('register'))

let initialeState = user ? {Register: true, user} : { Register: false, user:null}

const authReducer = (state = initialeState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                Register: true,
                user: action.payload,
            }
            
            case 'REGISTER_FAIL': 
            case 'LOGIN_FAIL': 
            return {
                ...state,
                Register: false,
            }
    
        default:
            return state
    }
}


export default authReducer