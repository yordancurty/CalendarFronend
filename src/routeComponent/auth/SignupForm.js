import React, { useState } from 'react';
import logo from '../../../src/logo.png';
import api from '../../apis/index';
import { useHistory } from "react-router-dom";
import LoadingButton from "../../components/LoadingButton";
import ErrorAlert from "../../components/ErrorAlert";

function SignupForm() {
    let history = useHistory();

    const [state, setState] = useState({
      name: "",
      email: "",
      password: "",
      loading: false,
      error: "",
    });
      
    const handleChange = (event) => {

      setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.value
      });
    };

    const handleSubmit = async (event) => {
      setState({
        ...state,
        loading: true
      })

      try {

        event.preventDefault();
      
        const response = await api.post("/signup", state)
        console.log(response) 
        setState({...state, loading: false})
          history.push("/profile") 

      } catch (err) {
        setState({...state, loading: false, error: "Insira dados válidos"})
      }
    }; 

    return (
      <div className="form-container d-flex justify-content-center align-items-center ">
        
        <form className="form-box-1" onSubmit={handleSubmit}> 
        <h1>Bem-vindo ao<br/> <span className="bold">CALENDAR</span></h1>
              <div className="form-group"> 
                <label htmlFor="signupNameInput">Nome:</label>
                <input name="name" type="name" className="form-control" id="signupNameInput" placeholder="Nome" onChange={handleChange} value={state.name}/>
              </div>

              <div className="form-group">
                    <label htmlFor="signupEmailInput">Email:</label>
                    <input name="email" type="email" className="form-control" id="signupEmailInput" placeholder="@" onChange={handleChange} value={state.email}/>
              </div>
              
            <div className="form-group">
                <label htmlFor="signupPasswordInput">Senha:</label>
                <input name="password" type="password" className="form-control" id="signupPasswordInput" placeholder="*****" onChange={handleChange} value={state.password}/>
            </div>
          {state.loading ? (<LoadingButton />) : (<button type="submit" className="btn-form btn btn-ligth">
              Criar Conta
              </button>)}
            {state.error ? <ErrorAlert error={state.error} /> : null}
          
        </form>
            
        </div>
      
    )
}

export default SignupForm;

