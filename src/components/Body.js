import React from 'react'
import ItemData from './ItemData'
import Itemlist from './ItemsList'
import Checkout from './CheckoutList'

export default function Body(props){
   
    //using useState to hold the array of filtered items
    const [filteredArray, setFilteredArray] = React.useState([])

    //Array to hold the list of filtered food
    let filteredFood = [];

    function Category(event){
        //creating a variable to hold the accessKey
        
        let category = event.target.accessKey

        //display certain items => display filtered items
        for (let index = 0; index < ItemData.length; index++) {
           if (ItemData[index].category === category) {
               filteredFood.push(<Itemlist setAddCart={props.setAddCart} setCounter={props.setCounter} total={props.total} setTotal={props.setTotal} subTotal={props.subTotal} setSubTotal={props.setSubTotal} picture={ItemData[index].picture} itemName={ItemData[index].itemName} price={ItemData[index].price} />)
           }
        }
       
        //settiing the filtered arry to the 
        setFilteredArray(filteredFood)        
        
    }

    function AllItems(){
        const foodItems = ItemData.map(
            (currentItem) => {
                return <Itemlist setAddCart={props.setAddCart} setCounter={props.setCounter} total={props.total} setTotal={props.setTotal} subTotal={props.subTotal} setSubTotal={props.setSubTotal} picture={currentItem.picture} itemName={currentItem.itemName} price={currentItem.price} />
            }

        )

        setFilteredArray(foodItems)
    }

    const total = props.addCart.reduce((prevTotal, price)=>{ return prevTotal + price.price}, 0);
    props.setTotal(total)
    let subTotal = total * .07
    props.setSubTotal((total + subTotal))
    console.log(total)
    
    return(

        <div className="row">
            <div className={`col-sm-8  ${props.show ? "col-sm-12" : "col-sm-8"}`}>
                <div className="row">
                    <div className="col-sm-12 navBar">
                        <ul className= 'navbar navbar-expand-lg navBody' >
                            <li onClick={AllItems} className='nav-link'>All Items</li>
                            <li onClick={Category} accessKey="baking" className='nav-link'>Baking</li>
                            <li onClick={Category} accessKey="canned foods" className='nav-link'>Canned Foods</li>
                            <li onClick={Category} accessKey="condiments" className='nav-link'>Condiments</li>
                            <li onClick={Category} accessKey="dairy" className='nav-link'>Dairy</li>
                            <li onClick={Category} accessKey="drinks" className='nav-link'>Drinks</li>
                            <li onClick={Category} accessKey="fruit" className='nav-link'>Fruits</li>
                            <li onClick={Category} accessKey="grains" className='nav-link'>Grains</li>
                            <li onClick={Category} accessKey="household items" className='nav-link'>Household Essentials</li>
                            <li onClick={Category} accessKey="meat" className='nav-link'>Meat</li>
                            <li onClick={Category} accessKey="personal care" className='nav-link'>Personal Care</li>
                            <li onClick={Category} accessKey="vegetables" className='nav-link'>Vegetables</li>
                        </ul> 
                    </div>
                </div>
                <div className="row itemList overflow-auto h-75">
                    <Itemlist data={filteredArray} setAddCart={props.setAddCart} setCounter={props.setCounter} total={props.total} setTotal={props.setTotal} subTotal={props.subTotal} setSubTotal={props.setSubTotal}/>
                </div>
            </div>
            <div className={`col-sm-4 checkout   ${props.show ? "checkTrue" : "checkFalse"}`}>
                <div className="row checkoutBackground">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <h4>Checkout</h4>
                    </div>
                </div>
                <div className="row checkBackground overflow-auto h-50  ">       
                    <Checkout data={props.addCart} setAddCart={props.setAddCart} setCounter={props.setCounter} setTotal={props.setTotal} total={props.total} subTotal={props.subTotal} setSubTotal={props.setSubTotal}/>
                </div>
               
                <div className="row total ">
                    <div className="col-sm-12">
                        <h5>Total: ${(props.total).toFixed(2)}</h5>
                        <h4>SubTotal: ${(props.subTotal).toFixed(2)}</h4>
                    </div>
                    <div className="row survey">
                        <div className="col-sm-12">
                            <p>Thank you for shopping at The People Store. Come back to see us. Please fill out the survey at <span className='website'>www.ThePeopleStore.org</span> to get 25% off your next purchase. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




