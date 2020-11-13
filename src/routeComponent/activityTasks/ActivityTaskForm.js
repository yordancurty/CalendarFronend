import React, {useState} from "react";
import api from "../../apis/index";
import { Redirect, useParams, useHistory } from "react-router-dom";


function ActivityTaskForm(props) {

  // DECLARAÇÕES A SEREM USADAS   

  let {id} = useParams();
  const history = useHistory();

  const [state, setState] = useState({
    loading: false,
    error: "",
  });


  console.log("state = ", state)
  console.log("props = ", props)
  console.log("id = ", id)
  


  //HANDLECHANGE

  function handleChange(event) {
    props.setActivityTasks({
      ...props.activityTasksState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }


  //HANDLESUBMIT

  async function handleSubmit(event) {
    event.preventDefault();

    setState({
      ...state,
      loading: true,
    });

    try {
      event.preventDefault();

      const response = await api.post(
        "/ActivityTaskForm/day/:id", props.activityTasksState);
          
      
        
      console.log("handlesubmit funcionou")

      setState({ ...state, loading: false });

      // <Redirect to={`/ActivityTaskForm/day/${id}`}/>

      history.push(`/day/${id}`)

    } catch (err) {
      setState({ ...state, loading: false, error: err.message });
      console.log( err.message );
    }
  }


  //RETORNO JSX

  return (
    <div className="activityTask-form-box">
    <div className="activityTask-form-container">
      <form className="form-activityTask-main" onSubmit={handleSubmit}>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskTitleInput">Título:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="activityTaskTitleInput"
            placeholder="Digite o título do evento aqui"
            value={props.activityTasksState.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskDescriptionInput">Descrição:</label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            id="activityTaskDescriptionInput"
            placeholder="Digite a descrição do evento aqui!"
            value={props.activityTasksState.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskStartTimeInput">Início:</label>
          <textarea
            type="text"
            name="initialDate"
            className="form-control"
            id="ctivityTaskStartTimeInput"
            placeholder="Digite o Horário de início do evento aqui!"
            value={props.activityTasksState.initialDate}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskEndTimeInput">Término:</label>
          <textarea
            type="text"
            name="endDate"
            className="form-control"
            id="activityTaskEndTimeInput"
            placeholder="Digite o Horário de termino do evento aqui"
            value={props.activityTasksState.endDate}
            onChange={handleChange}
          ></textarea>
        </div>
        
        
        
        
        
        <button type="submit" className="btn-form-activityTask btn btn-dark">
          Confirmar
        </button>
      </form>
    </div>
    </div>
  );
}

export default ActivityTaskForm;
