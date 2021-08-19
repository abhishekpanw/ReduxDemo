import axios from "axios";
import { authenticate } from "../../helpers";
import * as actionType from "./auth.actionType";
import { Switch, Route, Link,Redirect } from "react-router-dom";

export const setUser = (data) => ({
  type: actionType.SET_USER,
  payload: data,
});

export const setToken = (data) => ({
  type: actionType.SET_TOKEN,
  payload: data,
});

export const setUsers = (data) => ({
  type: actionType.SET_USERS,
  payload: data,
});

export const getLogin = (data) => ({
  type: actionType.GET_LOGIN,
  payload: data,
});



export const login = (email, password) => {

  return (dispatch) => {

    dispatch(getLogin({
        loading: true,
        success: '',
        error: ''
    })); 

 
      axios
      .post("api/auth/login", {
        email,
        password,
      })
      .then((res) => {
       

        if (res.data.success) {

            dispatch(setUser(res.data.body.user));
            dispatch(setToken(res.data.body.token));
  
            dispatch(getLogin({
                success: res.data.message,
                loading: false,
                error: ''
              })
            );

            authenticate(res.data.body.user,res.data.body.token);
           
            
          }

      })
      .catch((err) => {

        dispatch(getLogin({
            error: err.response.data.message,
            loading: false,
            success: ''
          })
        );

      });

    
      
    
 
  
  };
};
