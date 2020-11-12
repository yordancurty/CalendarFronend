import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/index";
import ActivityTaskForm from "./ActivityTaskForm";

function ActivityTaskCreate(){

const { userId } = useParams();
 const history = useHistory();

 const [state, setState] = useState({
     title: "",
     description: "",
     specifications: "",
     user: "",
     artType: "default",
     subCategory: "default",
     media: "",
     price: 0,
 });

 useEffect(() => {

    handleSubmit(state);

 }, [state]);

async function handleSubmit(data){

    try{

     const response = await api.post(`/activityTask/${userId}`, {...data});

     console.log(response)
     
     history.push(`/profile`)

    }catch(err){
        console.error(err);
    }
}

// async function handleFileUpload(data) {
//     try{
//         const uploadData = new FormData();

//         uploadData.append("media", data);

//         const response = await api.post("/media-upload", uploadData);

//         console.log(response.data.media);
//     return response.data.media;

//     } catch(err){
//         console.error(err);
//     }
// }
    

return (
        <div>
            <h1 className="h1-activityTask-form">Crie aqui sua atividade:</h1>
            <hr className="hr-activityTask-form"></hr>
            <ActivityTaskForm 
                handleSubmit={handleSubmit}
                // handleFileUpload={handleFileUpload}
                setState={setState}
                state={state}
            />
        </div>
    );
};

export default ActivityTaskCreate;