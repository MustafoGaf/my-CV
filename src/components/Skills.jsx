import ProgressBar from "./ProgressBar.jsx";

export default function Skills(){
    return (
        <section className="container1 mx-auto  my-16">

            <h1 className="text-4xl font-bold text-white mb-10 text-right md:text-left">Навыки</h1>
            <div className="flex items-center justify-center flex-col">
                <ProgressBar skill={"HTML"} percent={100} img={"/html.png"} />
                <ProgressBar skill={"CSS"} percent={100} img={"/css.png"} />
                <ProgressBar skill={"JavaScript"} percent={100} img={"/js.png"} />
                <ProgressBar skill={"TypeScript"} percent={100} img={"/ts.png"} />
                <ProgressBar skill={"ReactJS"} percent={100} img={"/react.png"} />
                <ProgressBar skill={"NodeJS"} percent={100} img={"/nodejs.png"} />
                <ProgressBar skill={"Redux"} percent={100} img={"/redux.png"} />
                <ProgressBar skill={"VueJS"} percent={100} img={"/vue.png"} />
                <ProgressBar skill={"PostgreSQL"} percent={70} img={"/psql.png"} />
                <ProgressBar skill={"Python"} percent={80} img={"/python.png"} />
                <ProgressBar skill={"Git"} percent={100} img={"/git.png"} />
                <ProgressBar skill={"Golang"} percent={10} img={"/go.png"} />

            </div>
        </section>
    )
}