import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/index";

import perfilImg from "../../midia/perfil.png";

function Profile(props) {


  //info do perfil editado
  const state = props.profileState;

  //info dos produtos criados por esse usuário
  const activityTasks = props.activityTasksState;
  const { _id } = props.loggedInUser;

  console.log("props profile =", props);
  console.log("state in Profile = ", state)
  console.log("activityTask in Profile = ", activityTasks)

  useEffect(() => {
    (async function fetchUser() {
      try {

        const response = await api.get("/profile");

        const activityTaskResponse = await api.get(`/activityTask/user/${_id}`);

        const activityTasks = activityTaskResponse.data !== null ? activityTaskResponse.data : [];

        console.log("activityTaskResponse = ", activityTaskResponse)

        props.setProfile({ ...response.data});

        console.log(response.data)

        // props.setActivityTasks([ ...activityTaskResponse.data]);
        
        props.setActivityTasks([ ...activityTasks]);

        

        console.log("activityTaskResponse = ", activityTaskResponse)

      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="div-mother-profile ">
      <div className="d-flex">
        <div className="profile d-flex flex-column align-items-center ">
          <h3 className="align-self-start profile-title">Perfil</h3>
          <hr></hr>
          <div className="icons-edit-delete-profile">
            <div className="icon-edit-profile">
          <Link to={`profile/edit`} >
          <i className="icon-edit-profile far fa-edit"></i>
          </Link>
          </div>
          <div className="icon-delete-profile">
          <Link to={`profile/delete/${props.loggedInUser._id}`} type="button">
            <i className="icon-trash-profile far fa-trash-alt"></i>
          </Link>
          </div>
          </div>
          <img className="photo-profile" src={perfilImg} />
          <h5 className="user-name-profile">
            <span className="destaque-amarelo">{state.name}</span>
          </h5>
          <h6>{state.email}</h6>
          <p className="profile-description">{state.aboutMe}</p>
          {/* <div className="">
            <a href={state.instagram}>
              <i className="social-media-icons-profile fab fa-instagram-square fa-2x"></i>
            </a>
            <a href={state.twitter}>
              <i className="social-media-icons-profile fab fa-twitter-square fa-2x"></i>
            </a>
            <a href={state.facebook}>
              <i className="social-media-icons-profile fab fa-facebook-square fa-2x"></i>
            </a>
            <a href={state.youtube}>
              <i className="social-media-icons-profile fab fa-youtube-square fa-2x"></i>
            </a>
          </div>
          <Link to={`/activityTask/new/${props.loggedInUser._id}`} type="button">
          <i className="icon-add-art fas fa-plus"> Add uma arte</i>
          </Link> */}
        </div>

      </div>
    </div>
  );
}

export default Profile;

