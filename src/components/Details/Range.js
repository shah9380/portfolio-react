const Range = (props)=>{
    return(
        <div className="w-[100%] text-start flex flex-col gap-2">
            <p><span className="text-white text-md font-medium">{props.name}</span> <span className="text-white/75"><span>{props.competent}</span>{props.fleuncy}</span></p>
            <div className="w-[100%] bg-gray-700 rounded-xl">
                <div className="bg-yellow-400 rounded-xl h-2" style={{width: `${props.competentValue}%`}}></div>
            </div>
        </div>
    )
}
export default Range;