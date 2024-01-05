const ActivityCard = (props)=>{
    return(
        <div className="bg-black/25 rounded-2xl flex flex-col p-6 relative md:w-[40%] grow">
            <figure class="hobbies-avatar-box absolute top-[-25px]">
                    <img src={props.imagelink} alt={props.alt} width="60" data-hobbies-avatar="" />
            </figure>
            <strong className="ml-auto w-fit text-white">{props.name}</strong>
            <small className="text-start text-white/75">{props.description}</small>
        </div>
    )
}
export default ActivityCard;