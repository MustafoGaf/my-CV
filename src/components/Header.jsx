


export default function Header(){
    return (

    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">


            <div className="text-2xl font-bold">
                <a href="#" className="hover:text-yellow-500">
                    My CV
                </a>
            </div>


            <div className="space-x-4">
                <a href="#" className="hover:text-yellow-500">Главная</a>
                <a href="#" className="hover:text-yellow-500">Проект</a>
                <a href="#" className="hover:text-yellow-500">Контакты</a>
            </div>

        </div>
    </header>

    )
}