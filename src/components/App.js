// -------- INICIALIZAÇÃO DE COMPONENTES E VARIAVEIS BASICAS -------------

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

import DayGuide from "../routeComponent/calendar/DayGuide"
import MonthGuide from "../routeComponent/calendar/MonthGuide"
import YearGuide from "../routeComponent/calendar/YearGuide"

import ActivityTaskForm from "../routeComponent/activityTasks/ActivityTaskForm";
import ActivityTaskCreate from "../routeComponent/activityTasks/ActivityTaskCreate";
import ActivityTaskEdit from "../routeComponent/activityTasks/ActivityTaskEdit";
import ActivityTaskDetail from "../routeComponent/activityTasks/ActivityTaskDetail";
import ActivityTaskFeed from "../routeComponent/activityTasks/ActivityTaskFeed";
import ActivityTaskDelete from "../routeComponent/activityTasks/ActivityTaskDelete";



let dateNow = new Date();
let monthName = null
let monthNumOfDays = null;

// let firstDayOfThisMonth = new Date(yearNow, monthNow, 1)


function App() {

    // STATE DAS TAREFAS
    const [activityTasks, setActivityTasks] = useState({
      title: null,
      description: null,
      initialDate: null,
      endDate: null
      
    });

    // STATE DO USUARIO LOGADO
    const [loggedInUser, setLoggedInUser] = useState({});



    // STATE PARA O PERFIL
    const [profile, setProfile] = useState({
      name: "",
      email: "",
      aboutMe: "",
      attachment: "",
      
    });
    


    // STATE PARA A DATA
    const [date, setDate] =useState({
        daysInMonth: [],
        
        monthNow : dateNow.getMonth(),
        yearNow : dateNow.getFullYear(),
        dayOfWeekNow : dateNow.getDay(),
        dayOfMonthNow : dateNow.getDate(),
        timeZone : dateNow.getTimezoneOffset(),
        monthName : "",
        monthNumOfDays : 30,
        daySelected : null ,
        monthSelected : null,
        yearSelected : null,
        showActivityTaskForm : false,
    })

    // STATE PARA A ACTIVITYTASKS
    // const [actTask, setActTask] =useState({
    //   title: null,
    //   description: null,
    //   initialDate: null,
    //   endDate: null
    // })


    // useEffect para quando o App.js é carregado
    useEffect(() => {
      console.log(profile)
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
      setLoggedInUser({...storedUser.user});


      switch (date.monthNow) {
        case 0:
            monthName ="JANEIRO"
            monthNumOfDays = 31
        break;
        
        case 1:
            monthName ="FEVEREIRO"
            monthNumOfDays = 28
        break;
        
        case 2:
            monthName ="MARÇO"
            monthNumOfDays = 31
        break;
        
        case 3:
            monthName ="ABRIL"
            monthNumOfDays = 30
        break;
        
        case 4:
            monthName ="MAIO"
            monthNumOfDays = 31
        break;
        
        case 5:
            monthName ="JUNHO"
            monthNumOfDays = 30
        break;
        
        case 6:
            monthName ="JULHO"
            monthNumOfDays = 31
        break;
        
        case 7:
            monthName ="AGOSTO"
            monthNumOfDays = 31
        break;
        
        case 8:
            monthName ="SETEMBRO"
            monthNumOfDays = 30
        break;
        
        case 9:
            monthName ="OUTUBRO"
            monthNumOfDays = 31
        break;
        
        case 10:
            monthName ="NOVEMBRO"
            monthNumOfDays = 30
        break;
        
        case 11:
            monthName ="DEZEMBRO"
            monthNumOfDays = 31
        break;
        
            

        default:
            break;
    };



      setDate({...date, monthNow : dateNow.getMonth(),
        yearNow : dateNow.getFullYear(),
        dayOfWeekNow : dateNow.getDay(),
        dayOfMonthNow : dateNow.getDate(),
        timeZone : dateNow.getTimezoneOffset(),
        monthName : monthName,
        monthNumOfDays : monthNumOfDays,})
    }, []);




    // funcão para logout
    const handleLogout = () => {
      setLoggedInUser({user: {}, token: ""});
    };


    //retorno com JSX
    return (
      <div>
      <BrowserRouter>
      <Navbar user={loggedInUser} />
        {loggedInUser._id ? (
              <Switch>      

                {/* ------------------------ ROTAS PRIVADAS GERAIS ------------------- */}

                  <PrivateRoute 
                    exact path="/logout" 
                    component={Logout} 
                    user={loggedInUser} 
                    setUser={setLoggedInUser} 
                    handleLogout={handleLogout}
                  />

                  {/* ------------------ ROTAS DO SISTEMA DE PERFIL ------------- */}

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
                      exact path="/profile/edit"
                      component={ProfileEdit}
                      user={loggedInUser}
                      profileState={profile}
                      setProfile={setProfile}
                  />

                  <PrivateRoute
                      exact path="/profile/delete/:id"
                      component={ProfileDelete}
                      user={loggedInUser}
                      setUser={setLoggedInUser} 
                  />   

                  {/* ----------- ROTAS DO SISTEMA DE CALENDARIO --------- */}

                  <PrivateRoute
                      exact path="/day/:id"
                      component={DayGuide}
                      user={loggedInUser}
                      setUser={setLoggedInUser}
                      date ={date}
                      setDate = {setDate} 
                  /> 

                  <PrivateRoute
                      exact path="/monthNow"
                      component={MonthGuide}
                      user={loggedInUser}
                      setUser={setLoggedInUser} 
                      date ={date}
                      setDate = {setDate}
                  /> 

                  <PrivateRoute
                      exact path="/year"
                      component={YearGuide}
                      user={loggedInUser}
                      setUser={setLoggedInUser}
                      date ={date}
                      setDate = {setDate} 
                  />  

                  {/* --------------- ROTAS DO SISTEMA DE TAREFAS -------------- */}

                  {/* /ActivityTaskForm/day/:id */}

                  <PrivateRoute
                      path="/ActivityTaskForm/day/:id"
                      exact
                      component={ActivityTaskForm}
                      user={loggedInUser}
                      date = {date}
                      activityTasksState={activityTasks}
                      setActivityTasks={setActivityTasks}
                      // actTask = {actTask}
                      // setActTask = {setActTask}
                  /> 

                  <PrivateRoute
                      path="/activityTask/new/:userId"
                      exact
                      component={ActivityTaskCreate}
                      user={loggedInUser}
                      activityTasksState={activityTasks}
                      setActivityTasks={setActivityTasks}
                      // actTask = {actTask}
                      // setActTask = {setActTask}
                  />  

                  <PrivateRoute
                      exact
                      path="/activityTask/edit/:id"
                      component={ActivityTaskEdit}
                      user={loggedInUser}
                      activityTasksState={activityTasks}
                      setActivityTasks={setActivityTasks}
                      // actTask = {actTask}
                      // setActTask = {setActTask}
                  />

                  <PrivateRoute
                      exact
                      path="/activityTask/delete/:id"
                      component={ActivityTaskDelete}
                      user={loggedInUser}
                  />  

                  
                  
                  <Route 
                    exact path="/activityTask/:id"
                    render={(props) => {
                        return (
                            <ActivityTaskDetail
                              {...props}
                              setLoggedInUser={setLoggedInUser}
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
                    <Redirect to="/monthNow" />
                  </Route>

                </Switch>
            ) : (

                // - - - - - - - - - ROTAS PUBLICAS - - - - - - - - - - 

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
                      }} 
                    />

                  <Route 
                    exact path="/activityTask/:id"  
                    render={(props) => {
                      return (
                        <ActivityTaskDetail
                          {...props}
                          setLoggedInUser={setLoggedInUser}
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
    )
}

export default App;