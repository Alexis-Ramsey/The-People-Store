import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './styles.css'

function App(){   
    //Global State
    const [addCart, setAddCart] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [button, setButton] = React.useState("Close Checkout")
    const [counter, setCounter] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [subTotal, setSubTotal] = React.useState(0) 


    return(
        <div className="container">
            <Header setButton={setButton} button={button} show={show} setShow={setShow} counter={counter}/>   
            <Body setAddCart={setAddCart} addCart={addCart} button={button} setCounter={setCounter} show={show} total={total} setTotal={setTotal} subTotal={subTotal} setSubTotal={setSubTotal}/>   
            <Footer />
        </div>
    )
}

export default App;