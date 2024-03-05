import React from "react";

export default function Header(props){

   function ChangeScreen(event){

        if(event.target === "Close Checkout"){
            props.setShow(prevShow => !prevShow)
        }else {
            props.setShow(prevShow => !prevShow)
        }
    }

 
    //To change the text on the checkout btn
    let button = props.show ? "Open Checkout" : "Close Checkout"
    
    return(
        <div className="row headerBackground">

            <div className="col-sm-8">
                <img src={require('./images/logo.png')} alt="The People Store Logo" />
            </div>

            <div className="col-sm-4">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-end cartCircle">
                        <button type="button" onClick={ChangeScreen} title={button} className="btn btn-primary position-relative">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{`${props.counter}`}</span>
                        </button>
                        <h5 className="hide">{button}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

