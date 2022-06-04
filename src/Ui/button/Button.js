import style from "./Button.module.css";

const Button = (props) => {

    return ( 
        <button className={style.btn}>{props.children}</button>
     );
}
 
export default Button;