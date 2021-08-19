import { authReducer } from "./auth/authReducer";
import { cmsReducer } from "./cms/cmsReducer";
const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    auth: authReducer,
    cms: cmsReducer
});


export default rootReducer;