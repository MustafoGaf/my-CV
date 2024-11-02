export default function AboutMe(){
    return (
        <section className="container1 mx-auto  rounded-lg flex items-center justify-between relative gap-10 md:flex-col md:mt-20">
            <div className="w-3/4">
                  <img src="https://mediasat.info/wp-content/uploads/2021/05/HTML-and-CSS.jpg" alt="Фото"
                       className=" object-cover rounded-[20px]"/>
              </div>
               
              <div className="text-center p-4 w-full">
                  <h1 className="text-4xl font-bold text-white">О себе.</h1>

                  <p className="text-gray-300 text-lg mt-4 text-justify">
                      Я   фронтенд-разработчик с более чем 3 годами  опыта в создании современных веб-приложений. Специализируюсь на разработке интерфейсов с использованием HTML, CSS, TailwindCSS, Bootstrap и JavaScript. Завершил более 50 успешных проектов. В настоящее время совершенствую свои навыки, работая с backend технологиями, такими как Go и Python, а также развиваюсь в сфере телекоммуникаций. Моя цель —  реализовать проекты, которые помогут людям в их цифровом пути.</p>
              </div>
                {/* <div className="absolute top-0 left-[-70px] transform scale-75 rotate-6">
                  <img src="/sql.png" alt="" className="w-14 " />  
                </div> */}
        </section>
    )
}