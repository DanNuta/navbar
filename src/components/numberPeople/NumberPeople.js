import Card from "../../Ui/card/Card";
import style from "./NumberPeople.module.scss";

const NumberPeople = (props) => {

    return ( 

        <Card toggle={props.toggle} className={style.card}>

            <div className={style.element}>

                <h3>Salut lume tuturor</h3>

            </div>
        </Card>

     );
}
 
export default NumberPeople;