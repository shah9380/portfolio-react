import MyComponent from "./MyComponent";

const Card = (props)=>{
    return(
        <div className="flex justify-center gap-2 items-start rounded-xl p-6 bg-black/25 my-4 md:w-[48%]">
            <MyComponent svgCode={props.svgString}></MyComponent>
            <div className="text-start text-white">
                <h4 className="text-lg font-medium">{props.headerContent}</h4>
                <p className="text-white/75">
                        {props.description}
                </p>
            </div>
        </div>
    )
}
export default Card;