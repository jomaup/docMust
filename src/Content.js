import Sidebar from "./Sidebar";
import Documentation from "./Documentation"
import { Outlet } from "react-router-dom";

const Content = () => {
    return (
    <div className="container">
        <Sidebar />
        <Outlet />
    </div>
    
    )
}

export default Content