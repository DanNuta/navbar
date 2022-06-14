import styleEl from "../../calendar/prevMonth/PrevMonth.module.scss"
import * as moment from 'moment';
import { Town } from "../../../context/TownCityContext";
import { useContext } from "react";

const PrevMonth = (props) => {

    const {toggleCalendarFn, toggleCalendar, selecteazaZiuaDePlecare, dataPlecare, dataRetur} = useContext(Town)


    const daySelect = (item) =>{
        toggleCalendarFn()
        selecteazaZiuaDePlecare(item);

      

    }



    
    const firstDayOfMonth = () =>{
        let dataObj = props.next;

        let firstDay = moment(dataObj)
                       .startOf("month")
                       .format("d");

        return firstDay;
    }



    const hober_CSS = {
        backgroundColor: 'rgba(0, 162, 255, 0.2)',
        color: "black"
    }

   

    let blanck = [];

    for(let i = 0; i < firstDayOfMonth(); i++){

        blanck.push(<div></div>)
    }
    
    let daysInMonth = [];
    
    for(let i = 1; i <= props.next.daysInMonth(); i++){

        let item = {
            month: props.next.format("MMM"),
            day: i
        }
         
        let currentDay = (i == dataRetur.data) && (dataRetur.month === props.next.format("MMM")) ? `${styleEl.today}` : "";

        let dayTur = (i == dataPlecare.data) && (dataPlecare.month === props.next.format("MMM")) ? `${styleEl.today}` : "";

         daysInMonth.push(<div onClick={() =>daySelect(item)} className={`${dayTur} ${styleEl.div} ${currentDay} ${styleEl.div}`}>{i}</div>)
     }


     let totalSlots = [...blanck, ...daysInMonth];

     let dayWeek = totalSlots.map((item, i) =>{
         return item
     })

     const daysWeek = moment.weekdaysShort();  //zilele din saptamana




    return ( 
       



            <div className={styleEl.calendar_month}>
                <h4>{`${props.next.format("MMMM")} ${props.next.year()}`}</h4>


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