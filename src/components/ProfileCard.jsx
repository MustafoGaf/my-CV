
export default function ProfileCard(){
    return (
        <section className="container mx-auto  bg-white my-8 rounded-lg flex items-center justify-between">
                <div className="container mx-auto ">
                    
                  <h1 className="text-4xl font-bold text-gray-800">Я Гафоров Мустафо</h1>
                  <p className="text-gray-600 text-lg my-4">Front-end разрабочик</p>
              </div>
              <div className="ml-6">
                  <img src="/public/user.png" alt="Фото Димы"
                       className="w-100 h-100 object-cover rounded-[20px] shadow-lg"/>
              </div>
        </section>
    )
}