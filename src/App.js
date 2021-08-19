
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components/admin";
import React, {useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { login } from './redux/auth/auth.action';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PrivateRoute from "./helpers/AdminRoutes";
import { isAuthenticated } from "./helpers";
import CMS from "./pages/Pages/CMS";



const history = React.lazy(() => import('./history'));
const GeneralDashboard =  React.lazy(() => import("./pages/Dashboard/GeneralDashboard"));
const Login=  React.lazy(() => import( './pages/Pages/Auth/Login'))
const Error404 =  React.lazy(() => import("./pages/Pages/Errors/404"))
const User =  React.lazy(() => import("./pages/Pages/User/User"))


export const MAIN_URL = 'http://localhost:5000/'


function App() {


  useEffect(() => {
    
  }, [])

  const {token} = useSelector(state => state.auth);



axios.defaults.headers.common["Authorization"] = token;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

  axios.interceptors.request.use(request=> {
    // Do something before request is sent
    // console.log(config)
    return request;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(response=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth)


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  (e) => {

    e.preventDefault();
    alert(email)
     dispatch(login(email,password));

  }

  let location = useLocation().pathname;

  let locationSplit = location.split("/");
  let locationParent = locationSplit[1];
  let WithoutRouter = ["auth", "error", "utilities"];

  if(state.login.loading){
      
    return (
      <div style={{display: 'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
      </div>
    )
    
  }else{
    return (
      <div className="App"> 
     
  
        <>
      
          {!WithoutRouter.includes(locationParent) ? (
            <>
              <Header />
              <Sidebar />
            </>
          ) : (
            ""
          )}
          <React.Suspense fallback={ <div style={{display: 'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000} //3 secs
      />
      </div>}>
          <Switch history={history}>
         
            <PrivateRoute path="/dashboard" component={GeneralDashboard} />            
            <Route path="/auth/login" component={Login} /> 
            {console.log('AUTHENTICaTE', isAuthenticated())}    
            
            <Route path="/error/404" component={Error404} />         
            <PrivateRoute path="/users" component={User} />
            <PrivateRoute path="/cms" component={CMS} />
            <Redirect from="/" to="/dashboard" />
            

          </Switch>
          </React.Suspense>
          <Footer />
        </>
      </div>
    );
  }

  
}

export default App;
