import CancelIcon from '@mui/icons-material/Cancel';
import style from "./WordSelected.module.css"


const WordSelected = (props) => {

    

    return ( 
        <div className={style.city_destination}>
            <h5>{props.element}</h5>
            <CancelIcon/>
        </div>
     );
}
 
export default WordSelected;