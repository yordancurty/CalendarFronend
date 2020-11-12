import React from "react";



function Homepage() {
  return (
    <div className="homepage-container container-fluid p-0">
      <div className="homepage-welcome">
        <h1>Bem Vindo ao Calendar</h1>
        <hr className="hr-welcome" />

        <div className="div-welcome container-fluid d-flex justify-content-center align-items-center  ">

          <div className="p-welcome ">

          <p>
            Seja bem vindo à plataforma Calendar. 
            Aqui você poderá utilizar de um sistema 
            virtual e gratuito de agenda para marcar 
            seus compromissos e organizar sua vida pessoal.
            Acreditamos que o desenvolvimento individual 
            e coletivo se faz através de um ciclo virtuoso 
            de contribuições e esperamos, através desse 
            projeto poder engrandecer a todos que o utilizarem.
            {/* <br/>
            <br/>
            Faça seu cadastro clicando  logo abaixo e descubra 
            as funcionalidades que podemos oferecer!  */}
          </p>
          {/* <Link className="navbar-brand ml-3" to="/signup">Cadastre-se</Link> */}
          </div>
          
          {/* <img className='photo-welcome' src={photoWelcome} /> */}
        </div>

        

      </div> 
    </div>
  );
}

export default Homepage;
