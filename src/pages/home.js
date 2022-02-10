import axiosIns from "../network";
// import axios from "axios"
import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import Add_item from "../file1";

function Home(props){
    
    

    const [ movies , setmovies] = useState([])

    useEffect(()=>{

        
        axiosIns
        .get("popular?api_key=8ea4bc46ed377072f364f391f73576f7" )
        .then((res)=>{
           const  arr = res.data.results.slice(6)
            setmovies(arr)

        // console.log(movies)
        
        })
        
        .catch((err)=>console.log(err))

     } , [])
    
     let t 
     const arr4=[512195  ,566525 ]

return <div className=" container mt-5">
    <div className="row">
        {
            movies.map((movie , ind)=>{
                if(! arr4.includes(movie.id)){
                    t=movie.title
                    if (t.includes(":") ) { t=t.substring(0,t.indexOf(":")) }
                     return <div className="col-4 mb-4"  >
                   
                      
                   <div className="card" >
                   <Link to= {`/showmovie/${movie.id}`} style={{textDecoration:" none"}}>  <img className="card-img-top" style={{height:"250px"}} src={"https://image.tmdb.org/t/p/w500/" +movie.poster_path}/> </Link>
         
                        <div className="card-body">
                        <h5 className="card-title text-dark  text-center">  { t }    </h5>
                        <p className="card-text mt-2 ">  <Add_item Mov={movie}/> </p>
                        </div>
                        
                    </div>
                    
                </div>
            }

            })


        }

    </div>

</div>
   


}

export default Home