import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from "../../apis/index";

function ActivityTaskFeed(props){
  

  console.log(props)
  

  useEffect(() => {
      (async function fetchUser() {
          try {
    
            const activityTaskResponse = await api.get("/activityTask");
    
            console.log("PRODUCT" ,activityTaskResponse);
    
    
            props.setActivityTasks([ ...activityTaskResponse.data]);
          } catch (err) {
            console.error(err);
          }
      })();
  }, []);
    
      const activityTasks = [ ...props.activityTasksState];
           



    return (
        <div className="div-mother-feed">

          {/* <DropButtom></DropButtom> */}
            <div className="d-flex justify-content-around">
              <h1>Produtos:</h1>
            </div>

            <div className="profile-activityTasks-cards">
              {activityTasks.map((activityTask) => <div className="activityTasks-profile">
                  <div className="card card-profile">
                  <img
                    className="card-img-top" src={activityTask.mediaUrl} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title card-title-profile" >{activityTask.title} | <span className="activityTask-price">R${activityTask.price},00</span></h5>
                        <p className="card-text card-text-profile">
                          {activityTask.description}
                        </p>
                        <Link to={`/activityTask/${activityTask._id}`} className="link-detail-activityTask-card">Saiba mais</Link>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
              </div>)}
            </div>
        </div>
    )
}

export default ActivityTaskFeed;