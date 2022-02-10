import axiosIns from "../network";
// import axios from "axios"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Movie(){

    const params = useParams()
   
    const [ movie , setmovie ] = useState({})
   

       useEffect(()=>{
        
         axiosIns
         .get(`${params.id}?api_key=8ea4bc46ed377072f364f391f73576f7`)
        .then((res)=>{
           
            setmovie(res.data) 
            // console.log(res.data)  
        
        })
        
        .catch((err)=>console.log(err))
          
        } , [])  
    
 return <div className=" container mt-5">
   
      
      <div className="row">
          <div className="col-3 offset-1 mt-5" > 
                     <div className="card">
                        <img className="card-img" src={ "https://image.tmdb.org/t/p/w500/" + movie.poster_path } />
                       <div className="card-body">
                            <h5 className="card-title text-center"> {movie.title} </h5>
            
                        </div>
                     </div>
            
                    </div>
            
                     <div className="col-6 offset-1 mt-5" > 
                     
                    <p className=" mb-4 " style={{ fontSize:"20px"}}> <span className="text-danger" > Title  : </span> { movie.title }</p>
                      <p className="mb-4 "style={{ fontSize:"20px"}}>   <span className="text-danger" > overview : </span>    {movie.overview}</p>
                      <p className="mb-4 " style={{ fontSize:"20px"}}> <span className="text-danger" > Release date :  </span> { movie.release_date}</p>
                     <p className="mb-4 " style={{ fontSize:"20px"}}> <span className="text-danger" > Tagline :  </span> { movie.tagline}</p>
                      <p className="mb-4 " style={{ fontSize:"20px"}}> <span className="text-danger" > Vote Count :  </span> { movie.vote_count}</p>
                   <p className="mb-4 " style={{ fontSize:"20px"}}> <span className="text-danger" > Vote average :  </span> { movie.vote_average}</p>
                     
                   </div>
                   </div>
       
</div>

}

export default Movie