import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/index";




function ActivityTaskDetail(props){


    

    const checkout = props.checkout;
    const setCheckout = props.setCheckout;

    console.log("props = ", props)
    

    const { id } = useParams();

    const [activityTask, setActivityTask] = useState({
        title: "",
        description: "",
        specifications: "",
        user: "",
        artType: "default",
        subCategory: "default",
        media: "",
        price: 0,
    });

    console.log("activityTask = ", activityTask)

    useEffect(() => {
        (async function fetchActivityTask() {
        try {
            const result = await api.get(`/activityTask/${id}`);

            // const result = await api.get(`/activityTask/${id}`);

            setActivityTask({ ...result.data});
        } catch (err) {
            console.error(err);
        }
        })();   
    }, []);

    const passProdToCheckoutState = () => {
        props.setCheckout((previouState) =>{
            const prevState = [...previouState, activityTask]
            console.log(prevState)
            return [...prevState];
        })
    }

    return (
        <div className="geralContainer">

             <div className="titleProdDetail">
                  <h1>ActivityTask Detail</h1>
                  <hr></hr>
             </div>
             <div className="prodAllInfo">
                  <div className="activityTaskImg">
                      <img src={activityTask.attachment} alt="ActivityTask attachment" />
                  </div>

                  <div className="activityTaskInfo">
                      <h3>{activityTask.title}</h3>
                      {/* <h4>NOME DO ARTISTA AQUI</h4> */}
                      <p className="descriptionProdDet">{activityTask.description}</p>
                      <p>Tipo: {activityTask.artType}</p>
                      <p><strong>Especificações:</strong></p>
                      <p>{activityTask.specifications}</p>
                      <p>Valor: {activityTask.price},00</p>
                      {activityTask._id ?  <button className="addToCartBtn" type="button" onClick={passProdToCheckoutState}> Adicionar ao Carrinho</button> : null}
                  </div>
             </div>
             

             <Link to={`/activityTask/all`}>Back to activityTasks</Link>
        </div>
    );

}

export default ActivityTaskDetail;