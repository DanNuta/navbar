import LocationCityIcon from '@mui/icons-material/LocationCity';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import style from "./CityDeSelectat.module.scss";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const CityDeSelectat = (props) => {

    const {selectCity, toggleDestination, activateToggleDestination} = useContext(Town);



    const cityElement = () =>{
        
        selectCity(props.city)
        activateToggleDestination()
    }

    return ( 
        <div onClick={cityElement} key={props.city.id} className={style.town}>
            <div className={style.town__city}>
                <LocationCityIcon/>
                <div>
                  <h4>{props.city.city}</h4>
                  <p>{props.city.country}</p>
                </div>
            </div>

            <CircleOutlinedIcon/>
        </div>
     );
}
 
export default CityDeSelectat;