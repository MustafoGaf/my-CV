
export default function ProfileCard(){
    return (
        <section className="container1  mx-auto  rounded-lg flex items-center justify-between md:flex-col-reverse">
                <div className="container mx-auto md:mt-10">
                    
                  <h1 className="text-4xl font-bold text-white">Я Гафоров Мустафо</h1>
                  <p className="text-gray-300 text-lg my-4">Front-end разрабочик</p>
                  <div className="flex items-center gap-3">
                    < img className="w-10" src="/html.png" alt="" />
                    <img className="w-10"  src="/css.png" alt="" />
                    <img className="w-10"  src="/js.png" alt="" />
                    <img  className="w-10 react"  src="/react.png"  alt="" />
                    <img className="w-10"  src="/vue.png" alt="" />
                  </div>
              </div>
              <div className="ml-6 md:ml-0 md:w-[80%]">
                  <img src=" /user.png" alt="Фото"
                       className="w-100 h-100 object-cover rounded-[20px] shadow-lg  "/>
              </div>
        </section>
    )
}