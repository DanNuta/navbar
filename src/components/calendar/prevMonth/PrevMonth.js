import styleEl from "./PrevMonth.module.scss"
import * as moment from 'moment';

const PrevMonth = () => {


    let curentDay = moment().format("D");

    const firstDayOfMonth = () =>{
        let dataObj = moment();

        let firstDay = moment(dataObj)
                       .startOf("month")
                       .format("d");

        return firstDay;
    }


    let css = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
      }

    let blanck = [];

    for(let i = 0; i < firstDayOfMonth(); i++){

        
        blanck.push(<div></div>)
    }
    
    let daysInMonth = [];
    
    for(let i = 1; i <= moment().daysInMonth(); i++){
         let currentDay = i == curentDay ? `${styleEl.today}` : ""

         daysInMonth.push(<div className={`${currentDay}`}>{i}</div>)
     }


     let totalSlots = [...blanck, ...daysInMonth];

     let dayWeek = totalSlots.map((item, i) =>{
         return item
     })

     const daysWeek = moment.weekdaysShort();




     

     console.log(curentDay)

    return ( 
        <div>



            <div className={styleEl.calendar_month}>
                <h4>{moment().month()}</h4>

                <div className={styleEl.calendar_month__week_end}>
                    {daysWeek.map((item, i) =>(
                        <div  key={i}>{item}</div>
                    ))}
                </div>


                <div className={styleEl.calendar_month__days}>
                      {dayWeek}
                </div>
            </div>


        </div>
     );
}
 
export default PrevMonth;