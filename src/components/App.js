import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../assets/styles/style.css";


import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import PrivateRoute from "../routeComponent/auth/PrivateRoute";

import LoginForm from "../routeComponent/auth/LoginForm";
import SignupForm from "../routeComponent/auth/SignupForm";
import Logout from "../routeComponent/auth/Logout";
import Profile from "../routeComponent/profile/Profile";
import ProfileEdit from "../routeComponent/profile/ProfileEdit";
import ProfileDelete from "../routeComponent/profile/ProfileDelete";


import ActivityTaskCreate from "../routeComponent/activityTasks/ActivityTaskCreate";
import ActivityTaskEdit from "../routeComponent/activityTasks/ActivityTaskEdit";
import ActivityTaskDetail from "../routeComponent/activityTasks/ActivityTaskDetail";
import ActivityTaskFeed from "../routeComponent/activityTasks/ActivityTaskFeed";
import ActivityTaskDelete from "../routeComponent/activityTasks/ActivityTaskDelete";






function App() {
  const [activityTasks, setActivityTasks] = useState([]);

  

const [loggedInUser, setLoggedInUser] = useState({});

const [profile, setProfile] = useState({
  name: "",
  email: "",
  aboutMe: "",
  attachment: "",
  attachmentUrl: "",
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
});


useEffect(() => {
  console.log(profile)
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
  setLoggedInUser({...storedUser.user});
}, []);



const [checkout, setCheckout] = useState([])


useEffect(() => {
  console.log(checkout)
}, [checkout])


const handleLogout = () => {
  setLoggedInUser({user: {}, token: ""});
};

  return (
    <div>
    <BrowserRouter>
    <Navbar user={loggedInUser} />
      {loggedInUser._id ? (
            <Switch>            
               <PrivateRoute exact path="/logout" component={Logout} user={loggedInUser} setUser={setLoggedInUser} handleLogout={handleLogout}/>
       <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            user={loggedInUser}
            profileState={profile}
            setProfile={setProfile}
            activityTasksState={activityTasks}
            setActivityTasks={setActivityTasks}
          />    
      <PrivateRoute
            path="/profile/edit"
            exact
            component={ProfileEdit}
            user={loggedInUser}
            profileState={profile}
            setProfile={setProfile}
          />
      <PrivateRoute
            path="/profile/delete/:id"
            exact
            component={ProfileDelete}
            user={loggedInUser}
            setUser={setLoggedInUser} 
          />                
      <PrivateRoute
            path="/activityTask/new/:userId"
            exact
            component={ActivityTaskCreate}
            user={loggedInUser}
          />  
      <PrivateRoute
            exact
            path="/activityTask/edit/:id"
            component={ActivityTaskEdit}
            user={loggedInUser}
            activityTasksState={activityTasks}
            setActivityTasks={setActivityTasks}
          />
      <PrivateRoute
            exact
            path="/activityTask/delete/:id"
            component={ActivityTaskDelete}
            user={loggedInUser}
          />          
              <Route exact path="/" component={Homepage} />

              
              <Route 
               exact path="/activityTask/:id"
               render={(props) => {
                return (
                  <ActivityTaskDetail
                    {...props}
                    setLoggedInUser={setLoggedInUser}
                    checkout={checkout} 
                    setCheckout={setCheckout}
                  />
                );
              }}
              />
              
             

              <Route exact path="/activityTask-all"         
              render={(props) => {
                  return (
                    <ActivityTaskFeed
                    activityTasksState={activityTasks} 
                    setActivityTasks={setActivityTasks}
                      {...props}
                      
                    />
                  );
                }} 
              />
              

             <Route>
                <Redirect to="/profile" />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) => {
                  return (
                    <LoginForm
                      {...props}
                      setLoggedInUser={setLoggedInUser}
                    />
                  );
                }}
              />
              <Route exact path="/" component={Homepage} />

              
              <Route exact path="/activityTask-all"         
              render={(props) => {
                  return (
                    <ActivityTaskFeed
                    activityTasksState={activityTasks} 
                    setActivityTasks={setActivityTasks}
                      {...props}
                      
                    />
                  );
                }} />
              <Route 
                exact path="/activityTask/:id"  
                render={(props) => {
                  return (
                    <ActivityTaskDetail
                      {...props}
                      setLoggedInUser={setLoggedInUser}
                      checkout={checkout} 
                      setCheckout={setCheckout}
                    />
                  );
                }}
              /> 

              <Route exact path="/signup" component={SignupForm} />
              
              <Route>
                <Redirect to="/login" />
              </Route>
            </Switch>
          )}
      <Footer />
    </BrowserRouter>
  </div>
  )}

export default App;