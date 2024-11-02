export default function Courses(){
    return (
        <section className="container1 mx-auto  my-16 relative md:text-center">
          
                <h1 className="text-4xl font-bold text-white mb-10 ">Kурсы</h1>
        <div className="flex items-center justify-center gap-10 md:flex-col">
            <div>
                <h1 className="text-xl font-bold text-white">Aкселератор навыков "ILMHONA"</h1>
                <p className="text-gray-100 font-medium text-white">Основа web(HTML, CSS, JS)</p>
                <p className="text-gray-200  text-white">3 месяц</p>
                   
            </div>
            <div>
                <img src="/ilmhona.png" alt="ilmhona" className="w-32" />
            </div>
        </div>
          <div className="flex items-center justify-center gap-10 mt-20 md:flex-col-reverse">
            <div className="">
                <img src="/softclub.jpg" alt="ilmhona" className="w-40 rounded-[100%]" />
            </div>
            <div>
                <h1 className="text-xl font-bold text-white">Академия SoftClub</h1>
                <p className="text-gray-100 font-medium text-white">Продвынутый JS && ReactJS Redux</p>
                <p className="text-gray-200  text-white">4 месяц</p>
                   
            </div>
        </div>
         
        </section>
    )
}