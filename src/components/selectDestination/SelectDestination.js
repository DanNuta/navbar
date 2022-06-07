import Card from "../../Ui/card/Card";
import style from "./SelectDestination.module.scss";
import Input from "../../Ui/input/Input";
import WordSelected from "../../Ui/word/WordSelected";
import CityDeSelectat from "../../Ui/cityDeSelectat/CityDeSelectat";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const SelectDestination = (props) => {

    const {destination, selectDestination, removeDestination, searchDestination, destinationSearch} = useContext(Town);

   

    console.log(destinationSearch)


    const changeFn = (e) =>{
        let value = e.target.value;
    
        //let include = select.includes(value);

        let el = destinationSearch.map(item => Array.from(item.city)
                            .splice(0, value.length)
                            .join("")
                            .includes(value) ? item : 0)
                            .filter(item => item.city);

        //let checkValueLength = value.length === 0 ?


        searchDestination(value.length === 0 ? destination : el)

    }

    

    

    return (
        
       
        <Card toggle={props.toggle} className={style.destination}>

            <div className={style.element}>

                    <div className={style.search_destination}>
                        <h2 className={style.font_text}>Din</h2>

                        <div className={style.word_search}>

                            <div className={style.word_selected_destination}>

                                {selectDestination.map(item =>(
                                    <WordSelected onClick={removeDestination} element={item.city} id={item.id}/>

                                ))}
                                
                            </div>

                            <Input input={{type: "text", onChange: changeFn}}/>
                        </div>
                    </div>







                    <div className={style.city_delected_element}>

                        <div className={style.base_overlow}>


                       {selectDestination.length > 0 &&  <h5 className={style.text_city}>Deja incluse</h5>}

                            {selectDestination.map(item => (
                                <CityDeSelectat  destination={true} city={item}/>
                            ))}


                        <h5 className={style.text_city}>Orase populate din regiunea ta</h5>

                            {destinationSearch.map(item => (
                                <CityDeSelectat destination={false}  city={item}/>
                            ))}

                        </div>



                    </div>

            </div>

        </Card>
     );
}
 
export default SelectDestination;