import { createStore } from "redux"
import { useSelector , useDispatch } from "react-redux"

export const setMovies = (payload)=>{
   
    return {
       type:"SET_MOVIES" ,
       payload

    }

}

export function reducer( state={ arr:[]  } , action ){
   
    switch(action.type){
      
        case "SET_MOVIES": 
           return{
               arr:action.payload
           }
        
        default:
            return state
            

    }

}

const store = createStore( reducer  )

export default store 


// export const Mov_arr = useSelector((state)=>state.arr)

//  export const  Fire_action =( arr )=>{

//    const dispatch = useDispatch()

//    dispatch(setMovies(arr))

// }
