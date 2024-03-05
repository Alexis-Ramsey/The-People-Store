import React from 'react'
import ItemData from './ItemData'
import FoodList from './FoodList'

export default function ItemList(props){
    
    if (props.data.length !== 0) {
        //Variable to set the props data
        const itemsArray = props.data.map(
            (foodItem) => {
                return <FoodList TestsetAddCart={props.setAddCart} setCounter={props.setCounter} total={props.total} setTotal={props.setTotal} subTotal={props.subTotal} setSubTotal={props.setSubTotal} picture={foodItem.props.picture} itemName={foodItem.props.itemName} price={foodItem.props.price} />
            }
        )
            
        //console.log(itemsArray)

        return(
            <>
                {itemsArray}
               
            </>
        )

    }else{

        const items = ItemData.map(
            (currentItem) => {
                return <FoodList TestsetAddCart={props.setAddCart} setCounter={props.setCounter} total={props.total} setTotal={props.setTotal} subTotal={props.subTotal} setSubTotal={props.setSubTotal} picture={currentItem.picture} itemName={currentItem.itemName} price={currentItem.price}/>
            }
        )
       
        return(
            <>
                {items} 
            </>
        )

    }    
}