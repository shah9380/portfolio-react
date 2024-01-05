import "./Button.css";
const Button =(props)=>{
    return(
        <button className="MyButton bg-gray-900/50 text-white rounded-full py-1 px-10">{props.value}</button>
    )
}
export default Button;