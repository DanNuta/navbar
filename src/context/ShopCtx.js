import { createContext } from "react";
import react from "react";
import { useState } from "react";


export const Products = createContext()

const ShopCtx = (props) => {

    const [products, setProducts] = useState([
        {
            title: "Sushi",
            desc: "Lorem isim dolor",
            price: 32,
            amount: 0,
            id: 1
        },
        {
            title: "Burgher",
            desc: "Lorem isim dolor",
            price: 32,
            amount: 0,
            id: 2
        },
        {
            title: "Fish",
            desc: "Lorem isim dolor",
            price: 32,
            amount: 0, 
            id: 3
        },
        {
            title: "Avocado",
            desc: "Lorem isim dolor",
            price: 32,
            amount: 0, 
            id: 4
        }
 ])

  const [card, setCard] = useState([]);


  const addInCard = (element) =>{

      let elementIncludes = card.map(item => item.id)

     if(elementIncludes.includes(element.id)){

        let addCounter = card.map(item => item.id === element.id ? {...item, amount: item.amount +1} : item)

        setCard(addCounter)

    }else{
        setCard(prev => [...prev, element])
    }

  }


    return ( 
        <Products.Provider value={{products, addInCard}}>
            {props.children}
        </Products.Provider>
     );
}
 
export default ShopCtx;