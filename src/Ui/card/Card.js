import style from "./Card.module.scss"

const Card = (props) => {


   

    return ( 
        <div className={props.toggle ? `${style.card_animation_active} ${props.className} ${style.card}` : `${style.card_animation_close} ${props.className} ${style.card}`}>{props.children}</div>
     );
}
 
export default Card;