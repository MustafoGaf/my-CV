export default function AboutMe(){
    return (
        <section className="container mx-auto my-4 h-[300px] bg-white my-8 rounded-lg flex items-center justify-between">
            <div className="w-1/3">
                  <img src="/public/js.png" alt="Фото"
                       className=" object-cover rounded-[20px] "/>
              </div>
               
              <div className="text-center p-4 w-full">
                  <h1 className="text-4xl font-bold text-gray-800">О себе.</h1>

                  <p className="text-gray-600 text-lg mt-4">
                      Я   фронтенд-разработчик с более чем 3 годами  опыта в создании современных веб-приложений. Специализируюсь на разработке интерфейсов с использованием HTML, CSS, TailwindCSS, Bootstrap и JavaScript. Завершил более 50 успешных проектов. В настоящее время совершенствую свои навыки, работая с backend технологиями, такими как Go и Python, а также развиваюсь в сфере телекоммуникаций. Моя цель —  реализовать проекты, которые помогут людям в их цифровом пути.</p>
              </div>
       
        </section>
    )
}