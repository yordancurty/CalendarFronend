import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../apis/index";

function ProfileEdit(props) {

  const history = useHistory();

  const { _id } = props.loggedInUser;

  const profile = {...props.profileState, attachmentUrl: ""}

  const [isLoadingFetch, setIsLoadingFetch] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);


  useEffect(() => {
    setIsLoadingFetch(true);
    (async function fetchUser() {
      try {
        const response = await api.get(`/profile`);
        setIsLoadingFetch(false);
//precisa zerar o attachementUrl para não cair no if da linha 35.
        props.setProfile({ ...profile, ...response.data, attachmentUrl: "" });
      } catch (err) {
        setIsLoadingFetch(false);
        props.setProfile({ ...profile, error: err.message });
      }
    })();
  }, []);

  useEffect(() => {
    if (profile.attachmentUrl) {
  /*     console.log("FOTO --->", profile.attachmentUrl) */
      (async function fetchUpload() {
        try {
          const response = await api.patch(`/profile/${_id}`, profile);

          console.log("RESPONSE -->", response)

          setIsLoadingSend(false);

          history.push("/profile");
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [profile]);

  const handleChange = (event) => {
    if (event.currentTarget.files) {
      console.log("UPDATE --->", profile)
/*       console.log("FOTO --->", profile.attachmentUrl) */
      return props.setProfile({
        ...profile,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    return props.setProfile({
      ...profile,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleFileUpload = async (file) => {
    try {
      const uploadData = new FormData();

      uploadData.append("attachment", file);

      const response = await api.post("/attachment-upload", uploadData);

      return response.data.attachmentUrl;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    setIsLoadingSend(true);

    try {
      event.preventDefault();

      const fileUrl = await handleFileUpload(profile.attachment);

      props.setProfile({ ...profile, attachmentUrl: fileUrl });
    } catch (err) {
      console.error(err);
      setIsLoadingSend(false);
      props.setProfile({ ...profile, error: err.message });
    }
  };

  return (
    <div>
    <h1 className="h1-profile-form">Edite seu perfil</h1>
    <hr className="hr-activityTask-form"></hr>
    <div className="container-profile-form">
      <form className="container-profile-box-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profileEditNameInput">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="profileEditNameInput"
            placeholder="Insira seu nome"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileEditEmailInput">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="profileEditEmailInput"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={profile.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartilhe seu email com alguém.
          </small>
        </div>
       
           <button type="submit" className="btn-form-activityTask btn btn-dark">
          Confirmar Alterações
        </button>
      </form>
    </div>
    </div>
  );
}

export default ProfileEdit;
