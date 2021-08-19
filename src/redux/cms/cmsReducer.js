import * as actionType from "./cms.actionType";

const initialState = {
  
    data: {
        cms: [],
        success: '',
        failed: '',
        loading: false
    },
    updateCMS:{
        success:'',
        error:'',
        loading: false
    }
}   

export const cmsReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.GET_CMS:
            return {
                ...state,
                data: action.payload
            } 
            
            case actionType.UPDATE_CMS:
                return {
                    ...state,
                    data: action.payload
                } 
               
    
    }

    return state;

}