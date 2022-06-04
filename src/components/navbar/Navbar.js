import style from "./Navbar.module.scss";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WordSelected from "../../Ui/word/WordSelected";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import PeopleIcon from '@mui/icons-material/People';
import Button from "../../Ui/button/Button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";
import reactDom from "react-dom";
import SelectDestination from "../selectDestination/SelectDestination";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";


const Navbar = () => {

    const {toggleDestination, activateToggleDestination, selectDestination} = useContext(Town);

    

    

    return ( 
        <nav className={style.nav}>



            <div className={style.nav__destination}>
                <h2 className={style.font_text}>Din</h2>

                <div onClick={activateToggleDestination}  className={style.element_destination}>

                    {selectDestination.map(item =>(
                        <WordSelected element={item.city}/>
                    ))}

                </div>

                {!toggleDestination && <SelectDestination toggle={toggleDestination}/>}
                {toggleDestination && <SelectDestination toggle={toggleDestination}/>}
                {toggleDestination && reactDom.createPortal(<div onClick={activateToggleDestination} className={style.second_element}></div>, document.querySelector(".destination"))}
            </div>




            <div className={style.swipe}>
                <SwapHorizIcon/>
            </div>




            <div className={style.nav__execution}>
                <h2 className={style.font_text}>spre</h2>

                <div className={style.element_execution}>

                    <WordSelected/>
                    <WordSelected/>
                    <WordSelected/>

                </div>
            </div>




            <div className={style.nav__calendar}>



                <div className={style.data_plecare}>

                <div className={style.plecare}>
                        <h5 className={style.font_text}>data plecare</h5>
                        <h4>3 iunie</h4>
                    </div>
                    <CalendarMonthIcon/>
                </div>


                <div className={style.data_retur}>
                    <div>
                        <h5 className={style.font_text}>data retur</h5>
                        <h4>+ Adaug retur</h4>
                    </div>
                    <CalendarMonthIcon/>
                </div>
            </div>





            <div className={style.nav__select_people}>
                <SwapVertIcon/>
                <h4>8</h4>
                <PeopleIcon/>
            

            </div>



            <div>
                <Button>Cauta</Button>
            </div>
        </nav>
     );
}
 
export default Navbar;