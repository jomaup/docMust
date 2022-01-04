import img from "./logonav.png"
import { TiZoom } from 'react-icons/ti';
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <div className="navbar">
            <div className="icon">
                <img className="logo" src={img}></img>
            </div>
            <div className="search">   
                <input className="srch" type="search" name=""/>
            </div>
            <TiZoom className="loupe" />
        </div>
        
    )
}

export default Header