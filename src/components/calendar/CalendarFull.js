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

const CalendarFull = (props) => {


    const [prevMont, setPrevMonth] = useState(moment());
    const [nextMont, setNextMonth] = useState(moment().add(1, 'months'));
    const [nextCounter, setNextCounter] = useState(2);
    const [prevCounter, setPrevCounter] = useState(1);
    
    



    const prevMonth = () =>{
        
    }


    const nextMonth = () =>{
        setNextMonth(moment().add(nextCounter, 'months'))
        setPrevMonth(moment().add(prevCounter, 'months'))

        setNextCounter(prev => prev +1)
        setPrevCounter(prev => prev +1)

        console.log(nextCounter)

        
    }

    return ( 
        <Card className={style.card} toggle={props.toggle}>
            <div className={style.element}>


                <div className={style.element__top_calendar}>

                    <div className={style.element__top_calendar__radion_btn}>
                        <input type="radio" name="dus" id="doar_dus"  value="Doar_dus" />
                        <label htmlFor="doar_dus">DOAR DUS</label>
                        <input type="radio" name="dus" id="dus_intors"  value="Dus_intors" />
                        <label htmlFor="dus_intors">DUS-INTORS</label>
                    </div>


                    <div className={style.element__top_calendar__right_element}>

                        <div className={style.data_plecare}>

                            <div>
                                <h6>Data plecare</h6>
                                <h6>12 iunie</h6>
                            </div>

                            <CalendarMonthIcon/>

                        </div>


                        <div className={style.data_retur}>

                            <div>
                                    <h6>Data plecare</h6>
                                    <h6>+ Adauga retur</h6>
                            </div>

                            <CalendarMonthIcon/>


                        </div>
                    </div>

                </div>


                <div className={style.element__calendar_body}>

                    <PrevMonth prev={prevMont}/>

                    <NextMonth next={nextMont}/>

                </div>



                <div onClick={prevMonth} className={style.element__btn_left}>
                    <ArrowBackIosNewIcon/>
                </div>


                <div onClick={nextMonth} className={style.element__btn_right}>
                    <ArrowForwardIosIcon/>
                </div>





               

            </div>
        </Card>
     );
}
 
export default CalendarFull;