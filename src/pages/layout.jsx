import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer"
import scss from "./layout.module.scss"

const Layout = () => {

    return (
        <div className={scss.layout} >
            <Sidebar />
            <div className={scss.layoutContain}>
                <Outlet />     
            </div>
            <Footer />
        </div>
    )
}

export default Layout