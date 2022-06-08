import Card from "../../Ui/card/Card";
import style from "./NumberPeople.module.scss";
import BoyIcon from '@mui/icons-material/Boy';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ManIcon from '@mui/icons-material/Man';
import Button from "../../Ui/button/Button";

import { Town } from "../../context/TownCityContext";
import { useContext } from "react";

const NumberPeople = (props) => {

    const {toggleBussinessEconom, economBussinessToggleFn, bebelus, copil, adult, increment, total} = useContext(Town);

    return ( 

        <Card toggle={props.toggle} className={style.card}>

            <div className={style.element}>

                
                <div className={style.btn_econom_bussines}>
                    <div onClick={() => economBussinessToggleFn(false)} className={ toggleBussinessEconom == false ? `${style.btn_people_choise } ${style.active_people_select}` : `${style.btn_people_choise}`}>
                        <h5>Econom</h5>
                    </div>

                    <div onClick={() => economBussinessToggleFn(true)} className={ toggleBussinessEconom == true ? `${style.btn_people_choise } ${style.active_people_select}` : `${style.btn_people_choise}`}>
                        <h5>Bussiness</h5>
                    </div>

                </div>




                <div>

                    <div className={style.people_select}>
                       <div className={style.people_select__icon}>
                         <ManIcon/>
                         <h1>Adult <span>(12+ ani)</span></h1>
                       </div>

                       <div className={style.people_select__btn}>
                           <button className={total == 9 ? `${style.button_people}` : `${style.button_people} ${style.btn_disable}`}>-</button>
                           <h1>{adult}</h1>
                           <button className={total == 9 ? `${style.button_people} ${style.btn_disable}` : `${style.button_people}`} onClick={() => increment("adult")}>+</button>
                       </div>

                    </div>




                   
                    <div className={style.people_select}>
                       <div className={style.people_select__icon}>
                         <BoyIcon/>
                         <h1>Copil <span>(2-12 ani)</span></h1>
                       </div>

                       <div className={style.people_select__btn}>
                       <button className={total == 9 ? `${style.button_people}` : `${style.button_people} ${style.btn_disable}`}>-</button>
                           <h1>{copil}</h1>
                           <button className={total == 9 ? `${style.button_people} ${style.btn_disable}` : `${style.button_people}`} onClick={() => increment("copil")}>+</button>
                       </div>

                    </div>




                   
                    <div className={style.people_select}>
                       <div className={style.people_select__icon}>
                         <ChildCareIcon/>
                         <h1>Bebelus <span>(0-2 ani)</span></h1>
                       </div>

                       <div className={style.people_select__btn}>
                       <button className={total == 9 ? `${style.button_people}` : `${style.button_people} ${style.btn_disable}`}>-</button>
                           <h1>{bebelus}</h1>
                           <button className={total == 9 ? `${style.button_people} ${style.btn_disable}` : `${style.button_people}`} onClick={() => increment("bebelus")}>+</button>
                       </div>

                    </div>

                </div>


                <div className={style.confirm_btn}>
                   <Button>OK</Button>
                </div>

            </div>
        </Card>

     );
}
 
export default NumberPeople;