import { useSelector , useDispatch } from "react-redux"
import { setMovies } from "./reduxfunc"
import { useState , useEffect} from "react"

function Add_item(props)  {

       const [ btn_txt , set_txt ] = useState("Add to Favorites")

       const [ shape , set_shape ] = useState("")

       

       const Mov_arr= useSelector((state)=>state.arr)

       const dispatch = useDispatch()

     const fire_action =( arr3)=>{

        dispatch(setMovies(arr3))
     
     }

    useEffect(()=>{
         console.log("hello from file1")

        if(typeof (Mov_arr.find(o => o.id === props.Mov.id))=== 'undefined'){ set_txt("Add to Favorites") ; set_shape("outline-")   }

        else{  set_txt("Remove from Favorites") ; set_shape("") }
     } ,[]) 


     


 const add_itm=(itm )=>{
        let  arr1 =[]
        let flag=true
        arr1.push(...Mov_arr)

        let ind=0

        for (ind in  arr1){

        if(arr1[ind].id === itm.id){

            set_txt("Add to Favorites")
            set_shape("outline-")
            arr1.splice(ind , 1)
            fire_action(arr1)
            flag = false
            console.log("removing case")
            console.log(Mov_arr , "hello,,," , itm.id )

            break
            
        }
    }

        if(flag){

           set_txt("Remove from Favorites")
           set_shape("")
            arr1.push(itm)
            fire_action (arr1)
            console.log("adding case")
            console.log(Mov_arr ,"hello adding,,,," , itm.id)

        }
    
       }
      
       return <button  className={"btn btn-block btn-"+shape+"info"} onClick={()=>add_itm(props.Mov )}    > { btn_txt}</button> 

}

export default Add_item 
