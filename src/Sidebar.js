import { Link } from "react-router-dom"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
               <Link to="/"> • home </Link>
            </div>
            <div className="sidebarWrapper">
                <Link to="/about"> • home </Link>
            </div>
            <div className="sidebarWrapper">
                <Link to="/jotest"> • home </Link>
            </div>
            <div className="sidebarWrapper">
                <Link to="/test"> • home </Link>
            </div>
            <div className="sidebarWrapper">
               • Sidebar
            </div>
        </div>
    )
}