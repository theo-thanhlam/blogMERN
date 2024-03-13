import Header from "./components/headers"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return (
        <main>
            <Header/>
            <Outlet />
        </main>
    )
}