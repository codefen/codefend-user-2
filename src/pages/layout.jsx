import { Outlet, useLocation } from "react-router";
import Sidebar from "../components/sidebar/sidebar";
import Footer from "../components/footer/footer"
import scss from "./layout.module.scss"

const Layout = () => {
    const pathExcludes = ["/profile"]
    const location = useLocation()
    return (
        <div className={scss.layout} >
            <Sidebar />
            <div className={scss.layoutContent}>
                <div className="overlay"/>
                <Outlet />    
                {
                    !pathExcludes.includes(location.pathname)
                    && <Footer />
                }
            </div>
        </div>
    )
}

export default Layout