export default function SoftSkills(){
    return (
        <section className="container1">

            <h1 className="text-4xl font-bold text-white mb-10 ">Soft Skills</h1>

            <div className={"flex items-center justify-center gap-20 md:flex-col md:gap-10"}>
                <div className="ml-6 md:ml-0 md:w-[35%]">
                    <img
                        src="https://www.tutorialspoint.com.cach3.com/assets/videos/courses/213/images/course_213_image.png"
                        alt="softskills"
                        className="w-100 h-100 object-cover"
                    />
                </div>

                <ul className={"text-xl text-white font-[500] list-[square]"}>


                    <li>
                        эмоциональный интеллект;
                    </li>
                    <li>
                            коммуникабельность;
                        </li>
                        <li>
                            работа в коллективе;
                        </li>
                        <li>
                            личная эффективность.
                        </li>
                    <li>


                        аналитическое мышление;</li>
                        <li>
                            адаптивность;
                        </li>
                        <li>
                            клиентоориентированность;
                        </li>

                    </ul>

                </div>
        </section>
)
}