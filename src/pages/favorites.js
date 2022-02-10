import {useSelector , useDispatch } from "react-redux"
import { useEffect , useState} from "react"
import { setMovies } from "../reduxfunc"
import axiosIns from "../network"

function Fav_items(){

    

    const Mov_arr= useSelector((state)=>state.arr)

    const dispatch = useDispatch()

  const fire_action =( arr3)=>{

     dispatch(setMovies(arr3))
  
  }

  const [ movies , setmovies ] = useState(Mov_arr)
   
  const rmv_itm =(ind)=>{
      let arr2=[]
      arr2.push(...Mov_arr)
      arr2.splice(ind , 1)
      fire_action(arr2)
      setmovies(arr2)


  }

    
    let t
    return <div className=" container mt-5">
    <div className="row">
        {
            
            movies.map((movie , ind)=>{
                
                    t=movie.title
                    if (t.includes(":") ) { t=t.substring(0,t.indexOf(":")) }
                     return <div className="col-4 mb-4 " key={movie.id} >
                    {/* style={{textDecoration:" none"}} */}
                   <div className="card  " >
                       <img className="card-img-top" style={{height:"250px"}} src={"https://image.tmdb.org/t/p/w500/" +movie.poster_path}/> 
                        <div className="card-body">
                            <h5 className="card-title text-dark text-center "> { t }     </h5>
                         
                            <p className="card-text mt-2 "> 
                            <button className="btn btn-info btn-block"  onClick={()=> rmv_itm(ind)} > Remove from favorites </button>
                              </p>
                            
                       </div>
                       
                    </div>
                    
         
                </div>
                
                
         
            })


        }

    </div>

</div>

}

export default Fav_items