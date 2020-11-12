import React from "react";


function ActivityTaskForm(props) {
  function handleChange(event) {
    if (event.currentTarget.files) {
      return props.setState({
        ...props.state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    props.setState({
      ...props.state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const mediaUrl = await props.handleFileUpload(props.state.media);

    props.setState({ ...props.state, mediaUrl });
  }

  return (
    <div className="activityTask-form-box">
    <div className="activityTask-form-container">
      <form className="form-activityTask-main" onSubmit={handleSubmit}>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskTitleInput">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="activityTaskTitleInput"
            placeholder="Insira o titulo da sua arte!"
            value={props.state.title}
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
            placeholder="Sua arte merece uma descrição!"
            value={props.state.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-activityTask form-group">
          <label htmlFor="activityTaskSpecificationInput">
            Fale mais sobre seu produto:
          </label>
          <textarea
            className="form-control"
            name="specification"
            type="text"
            id="activityTaskSpecificationInput"
            rows="3"
            placeholder="Escreva suas especificações"
            value={props.state.specification}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-activityTask form-group">
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                name="media"
                className="custom-file-input"
                id="activityTaskMediaInput"
                onChange={handleChange}
              />
              <label htmlFor="activityTaskMediaInput" className="custom-file-label">
                Choose file
              </label>
            </div>
            <div className="input-group-append" />
            <span className="input-group-text" id="activityTaskMediaInput">
              Upload
            </span>
          </div>
        </div>
        <div className="form-activityTask form-group">
          <label className="control-label">Quanto vale a sua arte?</label>
          <div className="from-activityTask form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">R$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                name="price"
                id="activityTaskPriceInput"
                value={props.state.price}
                onChange={handleChange}
                placeholder="00"
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="select-form-activityTask d-flex">
          <div className="form-activityTask form-group">
            <select
              onChange={handleChange}
              name="artType"
              className="custom-select"
              value={props.state.artType}
              required={true}
            >
              <option disabled value="default">
                Que tipo de artista você é?
              </option>
              <option value="Artes Literárias">Artes Literárias</option>
              <option value="Audiovisual">Audiovisual</option>
              <option value="Artes Visuais">Artes Visuais</option>
              <option value="Artesanato">Artesanato</option>
            </select>
          </div>
          <div className="form-activityTask form-group">
            <select
              onChange={handleChange}
              value={props.state.subCategory}
              name="subCategory"
              className="custom-select ml-2"
              required={true}
            >
              
            </select>
          </div>
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
