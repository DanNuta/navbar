import "../productCard/CardProduct.module.scss";
import ButtonCard from "../button/Button";

import { useRef } from "react";


const ProductCard = (props) => {


    const inputValue = useRef();


    console.log(inputValue.current)






    return ( 

        <div>
            <div>
                <h1>{props.product.title}</h1>
                <p>{props.product.desc}</p>
                <h4>{props.product.price}</h4>
            </div>


            <div>
                <div>
                    <h1>Amount</h1>
                    <input ref={inputValue} value="2"  type="number" min={props.product.amount} />
                </div>

                <ButtonCard element={props.product} onClick={props.onClick}>+Add</ButtonCard>

            </div>

            

        </div>
     );
}
 
export default ProductCard;