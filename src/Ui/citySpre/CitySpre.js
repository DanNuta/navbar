import LocationCityIcon from '@mui/icons-material/LocationCity';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import style from "../../Ui/cityDeSelectat/CityDeSelectat.module.scss";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const CityDeSelectat = (props) => {

    const {selectSpre, activateSpre } = useContext(Town);



    const cityElement = () =>{

        let obj = {
            city: props.city,
            destination: props.destination
        }
        
        selectSpre(obj)
        activateSpre()
        

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

            {props.destination ? <CheckCircleOutlineOutlinedIcon/> : <CircleOutlinedIcon/>}

            
        </div>
     );
}
 
export default CityDeSelectat;