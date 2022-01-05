import img from "./logonav.png"
import { TiZoom } from 'react-icons/ti';
import { useNavigate } from "react-router-dom";
/* 
function Logout() {
    let navigate = useNavigate();


function handleLogOut() {
    sessionStorage.setItem("userToken", '');
    sessionStorage.clear();
    history.push("/sigin");
  }

   */


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