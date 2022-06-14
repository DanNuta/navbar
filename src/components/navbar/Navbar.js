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
import SpreDestination from "../selectSpre/SpreDestination";
import NumberPeople from "../numberPeople/NumberPeople";
import CalendarFull from "../../components/calendar/CalendarFull"
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';


const Navbar = () => {

    const {toggleDestination, searchTravelFn, deleteReturnDataFn, dataRetur, activateToggleDestination, selectDestination, removeDestination, toggleSpre, activateSpre, spreDestination, swich, togglePeople, changeTogglePeople, total, toggleCalendar, toggleCalendarFn, dataPlecare} = useContext(Town);


    return ( 
        <nav className={style.nav}>



            <div className={style.nav__destination}>
                <h2 className={style.font_text}>Din</h2>

                <div  onClick={activateToggleDestination}  className={style.element_destination}>

                    {selectDestination.map(item =>(
                        <WordSelected onClick={removeDestination}  element={item.city}/>
                    ))}

                </div>

                {!toggleDestination && <SelectDestination toggle={toggleDestination}/>}
                {toggleDestination && <SelectDestination toggle={toggleDestination}/>}
                {toggleDestination && reactDom.createPortal(<div onClick={activateToggleDestination} className={style.second_element}></div>, document.querySelector(".destination"))}
            </div>




            <div className={style.swipe}>
                <SwapHorizIcon onClick={swich}/>
            </div>






            <div className={style.nav__execution}>
            <h2 className={style.font_text}>Spre</h2>

                <div  onClick={activateSpre}  className={style.element_execution}>

                    {spreDestination.map(item =>(
                        <WordSelected onClick={removeDestination}  element={item.city}/>
                    ))}

                </div>

                {!toggleSpre && <SpreDestination toggle={toggleSpre}/>}
                {toggleSpre && <SpreDestination toggle={toggleSpre}/>}
                {toggleSpre && reactDom.createPortal(<div onClick={activateSpre} className={style.second_element}></div>, document.querySelector(".destination"))}

            </div>




            <div className={style.nav__calendar}>



                <div  onClick={toggleCalendar == false ? toggleCalendarFn : null} className={style.data_plecare}>

                <div className={style.plecare}>
                        <h5 className={style.font_text}>data plecare</h5>
                        <h4>{`${dataPlecare.data} ${dataPlecare.month}`}</h4>
                    </div>
                    <CalendarMonthIcon/>
                </div>


                <div className={style.data_retur}>
                    <div  onClick={toggleCalendar == false ? toggleCalendarFn : null}>
                        <h5 className={style.font_text}>data retur</h5>
                        <h4>{ dataRetur.data !== undefined ? `${dataRetur.data} ${dataRetur.month}` : "+Adauga retur"}</h4>
                    </div>
                    

                    {dataRetur.data ? <HighlightOffRoundedIcon onClick={deleteReturnDataFn}/> :  <CalendarMonthIcon/>}
                </div>

                {!toggleCalendar && <CalendarFull toggle={toggleCalendar}/>}
                {toggleCalendar && <CalendarFull toggle={toggleCalendar}/>}
                {toggleCalendar && reactDom.createPortal(<div onClick={toggleCalendar == true ? toggleCalendarFn : null} className={style.second_element}></div>, document.querySelector(".destination"))}

            </div>







            <div onClick={togglePeople == false ? changeTogglePeople : null} className={style.nav__select_people}>

                <SwapVertIcon/>
                <h4>{total}</h4>
                <PeopleIcon/>

                {!togglePeople && <NumberPeople toggle={togglePeople}/>}
                {togglePeople && <NumberPeople toggle={togglePeople}/>}
                {togglePeople && reactDom.createPortal(<div onClick={togglePeople == true ? changeTogglePeople : null} className={style.second_element}></div>, document.querySelector(".destination"))}

            

            </div>



            <div>
                <Button onClick={searchTravelFn}>Cauta</Button>
            </div>
        </nav>
     );
}
 
export default Navbar;