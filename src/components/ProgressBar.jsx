
// eslint-disable-next-line react/prop-types
export default function ProgressBar({skill, percent, img}){
return (
    <div className={"flex items-center w-[60%] gap-10 mt-3 md:w-[90%] mb:flex-col mb:gap-2 mb:mt-16"}>
        <div className={"flex items-center gap-2 w-[30%]"}>
            <img src={img} alt={"Skills"} className={"w-[40px] md:w-[30px]"}/>
            <h1 className="mb-1 text-lg font-medium text-white">
                {skill}
            </h1>

        </div>
        <div className=" h-4 w-[100%] bg-gray-700 rounded-full md:w-[60%] mb:w-[80%]">
            <div className="h-4 bg-blue-500 rounded-full " style={{width: percent+"%"}}></div>
        </div>
    </div>
)
}