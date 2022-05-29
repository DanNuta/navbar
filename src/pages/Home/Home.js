import { useContext } from "react";
import { Products } from "../../context/ShopCtx";
import ProductCard from "../../Ui/productCard/ProductsCard";


const Home = () => {

    const {products, addInCard} = useContext(Products);


    return ( 
        <div>
            
            {products.map(item => (
                <ProductCard onClick={addInCard} product={item}/>
            ))}
        </div>
     );
}
 
export default Home;