import Card from "../../Ui/card/Card";
import style from "../calendar/CalendarFull.module.scss";
import PrevMonth from "./prevMonth/PrevMonth";

const CalendarFull = (props) => {

    return ( 
        <Card className={style.card} toggle={props.toggle}>
            <div className={style.element}>


                <PrevMonth/>
               

            </div>
        </Card>
     );
}
 
export default CalendarFull;