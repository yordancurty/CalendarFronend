import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function MonthGuide(props) {


    // ------------ PREPARAÇÕES E BASICOS DA FUNÇÃO -----------
    let daysInMonth = props.date.daysInMonth

    console.log("props = ", props)

    console.log("monthName =", props.date.monthName)

    const handleChange = (elem) => {
        // return props.setDate({...props.date, daySelected : elem })
        console.log("handleChange funcionando")
        
    }


    // ------------- AÇÕES DA FUNÇÃO ---------------

    daysInMonth = [];

    for (let i = 1; i <= props.date.monthNumOfDays; i++) {
        daysInMonth.push(i)
    }





    return (

        /* - - - - - PRIMEIRO METODO ATRAVÉS DE LISTAGEM- - - --*/ 

        <div className=" monthPage d-flex flex-wrap">

                <div className="monthNameClass">
                    <h1>
                        {props.date.monthName}
                    </h1>
                </div>


            <div className="monthContainer d-flex flex-wrap">

            {/* day/${elem} */}

                {daysInMonth.map((elem, idx) => 
                    
                        <Link to={`/day/${elem}`} key={idx} className="  monthH1Div d-flex justify-content-center" onClick = {handleChange}>
                            <div className="monthDayText"> {elem} </div>
                        </Link>
                    
                )}
            </div>
        </div>


















        /* - - - - - SEGUNDO METODO ATRAVES DE TABELA - - - --*/ 


        // <div className="div-mother-cart d-flex justify-content-center align-items-center">
        //       <div className="box-cart d-flex ">
    
        //             <div className=" pairTitleAndTable d-flex flex-column ">

        //                   {/* TABELA DOS DIAS DO MES */}
        //                   <table>
        //                     <tbody>
        //                           <tr className="lineOfTitles">
        //                             <td className="prodTitle">SEG</td>
        //                             <td className="priceTitle">TER</td>
        //                             <td className="priceTitle">QUA</td>
        //                             <td className="priceTitle">QUI</td>
        //                             <td className="priceTitle">SEX</td>
        //                             <td className="priceTitle">SAB</td>
        //                             <td className="priceTitle">DOM</td>
        //                           </tr>
                          
        //                     {/* ESTRUTURA MODULAR PARA HTMLFOR DO JSX*/}
        //                         {props.checkout.map((elem, idx) => <tr key={idx} className="productsInCart">
    
        //                           <td className="productMiniBlock">
        //                             <div>
        //                               <img
        //                                 className="product-cart-photo"
        //                                 src={elem.midia}
        //                                 alt="Card image cap"
        //                               />
        //                             {elem.title}
        //                             </div>
        //                           </td>
    
        //                           <td className="priceInMiniBlock">R$ {elem.price},00</td>
    
        //                           {/* <td>
        //                             <div className="quantity">
        //                               <button className="plus-btn" type="button"  name="button">
        //                                 <img src={plus} alt="" />
        //                               </button>
        //                               <input type="text" name="name" value="1" />
        //                               <button className="minus-btn" type="button"  name="button">
        //                                 <img src={minus} alt="minus" />
        //                               </button>
        //                             </div>
        //                           </td> */}
    
                                  
        //                         </tr>)}
                                
        //                       {/* TOTAL DAQUELE PRODUTO  */}
        //                       {/* <td>{state.total}</td> */}
                            
        //                   </tbody>
        //                 </table>
        //             </div>               
                      
        //                 {/* RESUMO DA COMPRA */}
        //                   <div className="chekoutResumeBox">
        //                         <div className="resumeTitle">
        //                           <h2>Finalize sua compra e suporte artistas independentes</h2>
        //                         </div>
        //                         <div>
        //                               <div className="custosResumo">
        //                                   <p>Total do carrinho: R$ {totalCart},00</p>
        //                                   <p>Valor da entrega: R$ {taxaEntrega},00</p>
        //                               </div>
        //                               <div className="totalAndFinalizeButton">
        //                                   <p>Total do Geral: R$ {totalPrice},00</p>
        //                                   <button><Link className="finalizarCompraButton"to="/thankYou">Finalizar Compra</Link></button>
        //                               </div>
        //                         </div>
        //                   </div>
                            
        //       </div>
        // </div>
      );
    
    
    
    














}

export default MonthGuide;