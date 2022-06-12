import styleEl from "./PrevMonth.module.scss"
import * as moment from 'moment';
import { Town } from "../../../context/TownCityContext";
import { useContext } from "react";

const PrevMonth = (props) => {

    const {toggleCalendarFn, toggleCalendar, selecteazaZiuaDePlecare, dataPlecare} = useContext(Town)


    const daySelect = (item) =>{
        toggleCalendarFn()
        selecteazaZiuaDePlecare(item);

      

    }


    let curentDay = props.prev.format("D");

    
    const firstDayOfMonth = () =>{
        let dataObj = props.prev;

        let firstDay = moment(dataObj)
                       .startOf("month")
                       .format("d");

        return firstDay;
    }


   

    let blanck = [];

    for(let i = 0; i < firstDayOfMonth(); i++){

        blanck.push(<div></div>)
    }
    
    let daysInMonth = [];
    
    for(let i = 1; i <= props.prev.daysInMonth(); i++){
         let currentDay = i == dataPlecare.data ? `${styleEl.today}` : "";

         daysInMonth.push(<div  onClick={ i < curentDay ? null : () =>daySelect(i)} className={ i < curentDay ? `${styleEl.disabled_days}` : `${currentDay} ${styleEl.div}`}>{i}</div>)
     }


     let totalSlots = [...blanck, ...daysInMonth];

     let dayWeek = totalSlots.map((item, i) =>{
         return item
     })

     const daysWeek = moment.weekdaysShort();  //zilele din saptamana


     console.log(props.prev.year())


    


    return ( 

            <div className={styleEl.calendar_month}>
                <h4>{`${props.prev.format("MMMM")} ${props.prev.year()}`}</h4>

                <div className={styleEl.calendar_month__week_end}>
                    {daysWeek.map((item, i) =>(
                        <div  key={i}>{item}</div>
                    ))}
                </div>


                <div className={styleEl.calendar_month__days}>
                      {dayWeek}
                </div>
            </div>


        
     );
}
 
export default PrevMonth;