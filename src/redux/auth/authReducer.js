import * as actionType from "./auth.actionType";

const initialState = {
    user: {},
    token: '',
    login: {
        success: '',
        failed: '',
        loading: false
    }
}   

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.SET_USER:
            return {
                ...state,
                user: action.payload
            }    
            
        case actionType.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }

            case actionType.SET_USERS:
                return {
                    ...state,
                    users: action.payload
                }

            case actionType.GET_USERS:
                return {
                    ...state,
                }
            
            case actionType.GET_LOGIN:
                return {
                    ...state,
                    login: {...action.payload}
                }
    
    }

    return state;

}