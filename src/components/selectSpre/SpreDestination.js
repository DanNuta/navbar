import Card from "../../Ui/card/Card";
import style from "../selectDestination/SelectDestination.module.scss";
import Input from "../../Ui/input/Input";
import WordSelected from "../../Ui/word/WordSelected";
import CitySpre from "../../Ui/citySpre/CitySpre"
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const SelectDestination = (props) => {

    const { removeSpre, selectSpre, spreSearchSelect, searchDestination, spreDestination, toggleSpre, spre, searchSpre, spreSearch} = useContext(Town);

   


    


    const changeFn = (e) =>{
        let value = e.target.value;
    
        //let include = select.includes(value);

        let el = searchSpre.map(item => Array.from(item.city)
                            .splice(0, value.length)
                            .join("")
                            .includes(value) ? item : 0)
                            .filter(item => item.city);

        

       

        spreSearchSelect(value.length === 0 ? spre : el)

    }

    

    

    return (
        
       
        <Card toggle={props.toggle} className={style.destination}>

            <div className={style.element}>

                    <div className={style.search_destination}>
                        <h2 className={style.font_text}>Spre</h2>

                        <div className={style.word_search}>

                            <div className={style.word_selected_destination}>

                                {spreDestination.map(item =>(
                                    <WordSelected onClick={removeSpre} element={item.city} id={item.id}/>

                                ))}
                                
                            </div>

                            <Input input={{type: "text", onChange: changeFn}}/>
                        </div>
                    </div>







                    <div className={style.city_delected_element}>

                        <div className={style.base_overlow}>


                       {spreDestination.length > 0 &&  <h5 className={style.text_city}>Deja incluse</h5>}

                            {spreDestination.map(item => (
                                <CitySpre  destination={true} city={item}/>
                            ))}


                        <h5 className={style.text_city}>Orase populate din regiunea ta</h5>

                            {searchSpre.map(item => (
                                <CitySpre destination={false}  city={item}/>
                            ))}

                        </div>



                    </div>

            </div>

        </Card>
     );
}
 
export default SelectDestination;






