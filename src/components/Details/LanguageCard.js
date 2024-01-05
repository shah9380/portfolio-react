import Range from "./Range";

const LanguageCard = (props)=>{
    const languageData = props.languageData;
    return (
        <div>
            <h3 className="text-white text-2xl font-bold text-start">{props.languageType}</h3>
            <div className="flex flex-col justify-center gap-2 items-center rounded-xl p-6 bg-black/25 my-4">
                {
                    languageData.map((data)=>{
                        return <Range {...data}></Range>
                    })
                }
            </div>
        </div>
    )
}
export default LanguageCard;