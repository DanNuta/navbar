import Card from "../../Ui/card/Card";
import style from "./SelectDestination.module.scss";
import Input from "../../Ui/input/Input";
import WordSelected from "../../Ui/word/WordSelected";
import CityDeSelectat from "../../Ui/cityDeSelectat/CityDeSelectat";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const SelectDestination = (props) => {

    const {destination, selectDestination, removeDestination} = useContext(Town);

    

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

                            <Input/>
                        </div>
                    </div>







                    <div className={style.city_delected_element}>

                        <div className={style.base_overlow}>


                       {selectDestination.length > 0 &&  <h5 className={style.text_city}>Deja incluse</h5>}

                            {selectDestination.map(item => (
                                <CityDeSelectat destination={1}  city={item}/>
                            ))}


                        <h5 className={style.text_city}>Orase populate din regiunea ta</h5>

                            {destination.map(item => (
                                <CityDeSelectat  city={item}/>
                            ))}

                        </div>



                    </div>

            </div>

        </Card>
     );
}
 
export default SelectDestination;