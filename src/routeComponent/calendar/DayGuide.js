import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/index";
import ActivityTaskForm from "../activityTasks/ActivityTaskForm"

function DayGuide(props) {

    console.log("props = ", props)
    console.log("useParams = ", useParams())

    let {id} = useParams();

    function showTaskForm(){
        function a(){
            props.date.showActivityTaskForm = true
        }
    }

    return ( 
        <div className=" dayContainer d-flex justify-content-center">
            <div className="dayTitleDiv">
                <h1 className="dayTitle"> {` ${id}° DIA DE  ${props.date.monthName}`} </h1>
            </div>

            <div>
                
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