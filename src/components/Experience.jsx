export default function Experience(){
    return (
        <section className="container1 my-16 relative">
          
                <h1 className="text-4xl font-bold text-white mb-10 md:text-lefy">Опыт работы</h1>
        <div className="flex items-center justify-center">
            <div className="">
                <h1 className="text-xl font-bold text-white">ЗАО "ТТМобайл" МегаФон Таджикистан</h1>
                <p className="text-gray-100 font-medium text-white">Технической поддержки пользователей</p>
                <p className="text-gray-200  text-white">июнь 2023 - настоящее время</p>
                    <ul className="text-[#bababa] listUl list-[square] pl-[50px]">
                        <li>
                            Разработка интерфейсов для внутренних систем компании.
                        </li>
                        <li>
                           Технической поддержка пользователей.
                        </li>
                        <li>
                           Подключаль услуги компании и консультироваль абонентов
                        </li>
                    </ul>
            </div>
        </div>
        <div className="absolute top-20 right-[-70px] transform scale-90 rotate-[45deg] md:relative md:rotate-[0deg] md:top-0 md:w-[200px]">
            <img src="https://jobmf.tj/static/media/logo.55766aa5735a8e0b22bf.png" alt="MegaFon" className="w-72 sm:w-full" />
        </div>
        <div className="absolute top-20 left-[10px] transform scale-90 md:hidden">
            <img src="https://jobmf.tj/static/media/Mind.522810a9a172b2659ec8a9c4fcbef4d9.svg" alt="MegaFon" className="w-32" />
        </div>
        </section>
    )
}