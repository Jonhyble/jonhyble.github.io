import Lang from "../../components/Lang"

export const Home = () => {
    return (
        <main className="w-screen h-fit">
            <h1 className="">{Lang("title")}</h1>
            <p className="text-3xl font-bold underline">{Lang("label")}</p>
            <p>{Lang("user")}</p>
        </main>
    )
}