import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/index";
import ActivityTaskForm from "../activityTasks/ActivityTaskForm"

import lixeiraImg from "../../midia/lixeira.png"
import editImg from "../../midia/edit.png"

function DayGuide(props) {

    //DECLARAÇÕES A SEREM USADAS

    console.log("props = ", props)
    console.log("useParams = ", useParams())

    let {id} = useParams();

   
    // Fetch das actitivityTasks vinculadas ao dia 

    useEffect(() => {
        (async function fetchActivityTask() {
          try {
            
            console.log("useEffect funcionando")

            props.setDate({...props.date, daySelected : id})

            const actvityTaskResponse = await api.get(`/ActivityTaskReed/day/${id}`);
    
            console.log("actTaskResponse =", actvityTaskResponse);
    
            props.setTaskList([ ...actvityTaskResponse.data]);

          } catch (err) {
            console.error(err);
          }
        })();
      }, []);




    // RETURN JSX

    return ( 
        <div className=" dayContainer d-flex justify-content-center">
            <div className="dayTitleDiv">
                <h1 className="dayTitle"> {` ${id}° DIA DE  ${props.date.monthName}`} </h1>
                <hr/>
            </div>

            <div className="tasksDiv">
                {props.taskList.map((elem, idx) => 
                            
                            <div className=" taskListStyle d-flex" key="idx">
                                <div className="taskListTitle">
                                    <h1>{elem.title}</h1>
                                </div>
                                <Link to={`/ActivityTask/Edit/${elem._id}`} className=" editIcon taskIcon  d-flex justify-content-center">
                                    <div className=""> 
                                        <img className="taskIconImg " src={editImg} /> 
                                    </div>
                                </Link>
                                <Link to={`/activityTask/Delete/${elem._id}`} className=" lixeixaIcon taskIcon  d-flex justify-content-center">
                                    <div className=""> 
                                        <img className="taskIconImg " src={lixeiraImg} /> 
                                    </div>
                                </Link>
                            </div>
                        
                )}
            </div>
                
            <div>
                
                <Link to={`/ActivityTaskForm/day/${id}`} className=" addTaskBtn  d-flex justify-content-center">
                    <div className="addTaskText"> 
                        ADD TASK 
                    </div>
                </Link>

                
            </div>
        </div>
    )
};

export default DayGuide;