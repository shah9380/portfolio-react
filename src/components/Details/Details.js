import ShowMoreCard from "../ShowMoreCard";
import Activities from "./Activities";
import Languages from "./Languages";
import PrimaryFocus from "./PrimaryFocus";

const Details = ()=>{
    return(
        <section className="flex flex-col gap-6">
            <div className="w-fit gap-2 flex flex-col">
                <h1 className="text-white font-semibold text-3xl ">About Me</h1>
                <p className="bg-yellow-200 rounded-lg h-[6px] w-1/3"></p>
            </div>
            <ShowMoreCard></ShowMoreCard>
            <PrimaryFocus></PrimaryFocus>
            <Languages></Languages>
            <Activities></Activities>
        </section>
    )
}
export default Details;