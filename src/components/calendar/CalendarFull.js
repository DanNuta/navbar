import Card from "../../Ui/card/Card";
import style from "../calendar/CalendarFull.module.scss";
import PrevMonth from "./prevMonth/PrevMonth";
import NextMonth from "../../components/calendar/nextMonth/NextMonth";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as moment from 'moment';
import React from "react";
import { useState } from "react";
import { Town } from "../../context/TownCityContext";
import { useContext } from "react";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const CalendarFull = (props) => {

    const {dataPlecareToggle, deleteReturnDataFn, togglePlecareReturFn, dataReturToggle, dataPlecare, dataRetur} = useContext(Town)


    const [prevMont, setPrevMonth] = useState(moment());
    const [nextMont, setNextMonth] = useState(moment().add(1, 'months'));

    const [counter, setCounter] = useState(0)

    
    const prevMonth = () =>{
        setPrevMonth(prevMont.subtract(1,'months'))
        setNextMonth(nextMont.subtract(1,'months'))

        setCounter(prev => prev +1)
    }



    const nextMonth = () =>{
        setPrevMonth(prevMont.add(1, 'months'))
        setNextMonth(nextMont.add(1, 'months'))

        setCounter(prev => prev +1)

      
    }



   

   

    return ( 
        <Card className={style.card} toggle={props.toggle}>




            <div onClick={prevMonth} className={style.element__btn_left}>
                    <ArrowBackIosNewIcon/>
                </div>


                <div onClick={nextMonth} className={style.element__btn_right}>
                    <ArrowForwardIosIcon/>
                </div>




            <div className={style.element}>


                <div className={style.element__top_calendar}>

                    <div className={style.element__top_calendar__radion_btn}>
                        <input type="radio" name="dus" id="doar_dus"  value="Doar_dus" />
                        <label htmlFor="doar_dus">DOAR DUS</label>
                        <input type="radio" name="dus" id="dus_intors"  value="Dus_intors" />
                        <label htmlFor="dus_intors">DUS-INTORS</label>
                    </div>


                    <div className={style.element__top_calendar__right_element}>

                        <div onClick={() => togglePlecareReturFn("data_plecare")} className={ dataPlecareToggle ? `${style.data_plecare} ${style.active_btn_plecare_retur}`: `${style.data_plecare}`}>

                            <div>
                                <h4>Data plecare</h4>
                                <h5>{`${dataPlecare.data} ${dataPlecare.month}`}</h5>
                            </div>

                            <CalendarMonthIcon/>

                        </div>


                        <div onClick={() => togglePlecareReturFn("data_retur")} className={ dataReturToggle ? `${style.data_retur} ${style.active_btn_plecare_retur}`: `${style.data_retur}`}>

                            <div>
                                    <h4>Data plecare</h4>
                                    <h5>{ dataRetur.data !== undefined ? `${dataRetur.data} ${dataRetur.month}` : "+Adauga retur"} </h5>
                            </div>

                            {dataRetur.data ? <HighlightOffRoundedIcon onClick={deleteReturnDataFn}/> :  <CalendarMonthIcon/>}


                        </div>
                    </div>

                </div>


                <div className={style.element__calendar_body}>

                    <PrevMonth prev={prevMont}/>

                    <NextMonth next={nextMont}/>

                </div>



                





               

            </div>
        </Card>
     );
}
 
export default CalendarFull;