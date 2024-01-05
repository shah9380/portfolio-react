import ActivityCard from "./ActivityCard";

const Activities = ()=>{
    const ActivityTypes = [
        {
            name: 'Investments',
            description: 'Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment',
            imagelink: 'https://oktayshakirov.com/assets/images/finances.png',
            alt: 'finances'
        },
        {
            name: 'Music',
            description: 'Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians',
            imagelink: 'https://oktayshakirov.com/assets/images/music.png',
            alt: 'singing'
        },
        {
            name: 'Traveling',
            description: 'Exploring new places, learn about different cultures and create lifelong memories.',
            imagelink: 'https://oktayshakirov.com/assets/images/traveling.png',
            alt: 'explore'
        },
        {
            name: 'Photography',
            description: 'Capturing precious moments and memories through the lens of a camera.',
            imagelink: 'https://oktayshakirov.com/assets/images/camera.png',
            alt: 'photos'
        },
    ]
    return(
        <section className="flex flex-col gap-12">
            <h3 className="text-white text-2xl font-bold">Favourite Activities</h3>
            <div className="flex flex-col md:flex-row gap-12 md:flex-wrap justify-between md:gap-y-12 md:gap-12">
                {
                    ActivityTypes.map((data)=>{
                    return <ActivityCard {...data}></ActivityCard>
                    })
                }
            </div>
        </section>
    )
}
export default Activities;