import React, {useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/index";

const DeleteProject = () => {
    const { id } = useParams();
    const history = useHistory();
  
    useEffect(() => {async function fetchData() {
      try {
        const result = await api.delete(`activityTask/${id}`);
  
        history.push("/profile");
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }
, [id])
    
    return (
      <div>Deletando...</div>
    )
  
  };
  
  export default DeleteProject;