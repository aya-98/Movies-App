
import {  useSelector} from "react-redux"
import { Link } from "react-router-dom"

function Star_icon(){

   let Mov_arr= useSelector((state)=>state.arr)


   return <div style={{ left:"650px" , position:"relative"}}>

      <Link to="/favourite"  style={{ textDecoration:"none"}}><i className="fa fa-star " style={{ fontSize:"45px",  color:"yellow"}}>  </i> </Link> 
      <span className="badge badge-pill badge-dark " >{ Mov_arr.length }  </span>


   </div>



}

export default Star_icon
