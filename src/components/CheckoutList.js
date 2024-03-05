import React from "react"

export default function Checkout(props){

 console.log(props)
    //mapping through the props data to get the array inside
    const food = props.data.map(
        (currentItem)=>{
            return <Cart id={currentItem.id} picture={currentItem.picture} itemName={currentItem.itemName} price={currentItem.price} addCart={props.data} TestsetAddCart={props.setAddCart} setTotal={props.setTotal} total={props.total} subTotal={props.subTotal} setSubTotal={props.setSubTotal} setCounter={props.setCounter}/>      
        }
        
    )

 

   return(
    <>
        {food}
    </>
   )
}

function Cart(props){
    let price = 0

    function Delete(props){
        props.TestsetAddCart((prevAddCart) => prevAddCart.filter(itemName => itemName.id !== props.id))
        props.setCounter((prevCount) => prevCount - 1)        
    }
    
    // console.log(props.addCart)   
    
   
    return(
        <>
            <div className="col-sm-3 foodImage">
                <img className='images img-fluid' src={props.picture} alt={props.itemName} />
            </div>
            <div className="col-sm-7">
                <div className="row">
                    <h4>{props.itemName}</h4>
                </div>
                <div className="row">
                    <h5>${props.price}</h5>
                </div>
            </div>
            <div className="col-sm-2 ">
                <img className="delete" onClick={() => Delete(props)} src="https://clipground.com/images/delete-button-icon-clipart-2.jpg" alt='delete' />
            </div>
        </>

    )    

}