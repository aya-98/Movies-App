import { Link } from "react-router-dom";
import Star_icon from "./file2";

function Navbar (){
return (
<nav className="navbar navbar-expand-lg  bg-info ">
  <Link className="navbar-brand text-white mx-5" to="/home" style={{ fontSize:"26px" }} > Movies App </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav  ">
      <Link className="nav-item nav-link text-white"  style={{ fontSize:"23px" }} to="/home"> Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link text-white "  style={{ fontSize:"23px" }} to="/movies"> Movies </Link>
      <Link className="nav-item nav-link text-white " style={{ fontSize:"23px" }} to="/login"> Login </Link>
      <Link className="nav-item nav-link text-white" style={{ fontSize:"23px" }} to="/register"> Register </Link>
      <Star_icon/>
    </div>
  </div>
</nav>
)

}

export default Navbar
