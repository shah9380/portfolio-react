import Card from "./Card";

const PrimaryFocus = ()=>{
    
    const content = [
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Web Design & Development",
            content: "Creating attractive, easy-to-use websites that work well for businesses and individuals online.",
            id: Date.now()
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Mobile Apps & Games",
            content: "Creating and developing engaging mobile apps and games for iOS and Android devices.",
            id: Date.now()

        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Development Solutions",
            content: "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.",
            id: Date.now()
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Marketing & SEO",
            content: "Using SEO and marketing strategies to boost online visibility and promote products or services.",
            id: Date.now()
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Visual Storytelling",
            content: "Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.",
            id: Date.now()
        },
        {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="min-w-[20%]" viewBox="0 0 512 512"><path fill="#ffd500" d="M483 159.7c10.9-24.6 21.4-60.4 21.4-87.9 0-72.7-79.6-98.4-209.7-38.6-107.6-7.2-211.2 73.7-237.1 186.5 30.9-34.9 78.3-82.3 122-101.2C125.4 166.9 79.1 228 44 291.7 23.2 329.7 0 390.9 0 436.7c0 98.6 92.9 86.5 180.3 42 31.4 15.4 66.6 15.6 101.7 15.6 97.1 0 184.2-54.3 216.8-146H377.9c-52.5 88.6-196.8 53-196.8-47.4H509.9c6.4-43.6-1.7-95.7-26.9-141.2zM64.6 346.9c17.7 51.2 53.7 95.9 100.3 123.3-88.7 48.9-173.3 29.1-100.3-123.3zm116-108.9c2-55.2 50.3-94.9 104-94.9 53.4 0 102 39.7 104 94.9H180.5zm184.5-187.6c21.4-10.3 48.6-22 72.6-22 31.4 0 54.3 21.7 54.3 53.7 0 20-7.4 49-14.6 67.9-26.3-42.3-66-81.6-112.3-99.6z"/></svg>',
            header: "Digital Content Creation",
            content: "Creatiing dynamic digital content, such as 3D models, graphics or animations.",
            id: Date.now()
        }
    ]
        
    return(
        <section className="flex-col flex">
            <h3 className="text-white text-2xl font-bold">Primary Focus</h3>
            <div className="flex flex-wrap gap-4 justify-between gap-y-2">
                {
                content.map((data,index)=>{
                    if(index<4){
                        return <Card svgString={data.icon} headerContent={data.header} description={data.content} id={data.id}></Card>
                    }
                })
                }
            </div>
            <h3 className="text-white text-2xl font-bold">Exploring Creativity</h3>
            <div className="flex flex-wrap gap-4 justify-between gap-y-2">
                {
                    content.map((data,index)=>{
                        if(index>3){
                            return <Card svgString={data.icon} headerContent={data.header} description={data.content} id={data.id}></Card>
                        }
                    })
                }
            </div>
            
        </section>
    )
}
export default PrimaryFocus;