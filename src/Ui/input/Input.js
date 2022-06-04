import style from "./Input.module.css";

const Input = (props) => {

    return ( 
        <input className={style.input} {...props.input} />
     );
}
 
export default Input;