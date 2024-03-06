import React from "react";
import {v4 as uuidv4} from 'uuid'
uuidv4()

export default function  FoodList(props){
   //console.log(props)
    
    function CartList(currentItem){

        //Variables
        let cartItems = {
            id: uuidv4(),
            picture: currentItem.picture,
            itemName: currentItem.itemName,
            price: currentItem.price
        };
        let price = 0;
        
        // console.log(currentItem)

        price = cartItems.price + props.total
       

        //Setting the useStates
        props.setTotal(price)
        let subTotal = price * .07
        props.setTaxes(subTotal)
        props.setSubTotal((price + subTotal))
        props.setCounter((prevCounter) =>prevCounter + 1)
        props.TestsetAddCart(prevCart => [...prevCart, cartItems])        
    }
    
    
   
    return(
        <div className="col-sm-3 items">
           <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 ">
                        <img className='images img-fluid' src={props.picture} alt={props.itemName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>{props.itemName}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>${props.price}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-start icon">
                    <div className="col-sm-12 sign">
                        <img onClick={() => CartList(props)} src="https://www.shareicon.net/data/25x25/2016/01/05/698639_check_512x512.png" alt={props.itemName} aria-valuenow={props.price}/>
                    </div>
                </div>
           </div>
        </div>
    )
    

}