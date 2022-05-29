import Button from "../button/Button.modules.css";


const ButtonCard = (props) => {

    return ( 
        <button onClick={() => props.onClick(props.element)}>{props.children}</button>
    );
}
 
export default ButtonCard;