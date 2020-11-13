import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/index";

function DayGuide(props) {

    console.log("props = ", props)
    
    let {id} = useParams();


    return ( 
        <div>
            <div>
                <h1> {` ${id}° DIA DE  ${props.date.monthName}`} </h1>
            </div>
            <div>
                
            </div>
        </div>
    )
};

export default DayGuide;