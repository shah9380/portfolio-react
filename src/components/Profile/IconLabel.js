import Inlinesvg from "./Inlinesvg";
const IconLabel = (props)=>{
    return(
    <div className="flex justify-start items-start gap-4 md:w-[48%]">
        <div className="bg-gray-800 w-fit p-4 rounded-xl"><Inlinesvg svgCode={props.svgCode} alt={props.altText} /></div>
        <div className="flex flex-col justify-center items-start text-start text-white">
            <small className="uppercase text-gray-400 font-medium">{props.labelName}</small>
            <p>{props.labelContent}</p>
        </div>
    </div>
    )
    
}
export default IconLabel;