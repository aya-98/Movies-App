import { useState } from "react"

const validPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z0-9@$!%*?&#]{8,}$")
const validEmail= new RegExp('^.+@.+.com')
function Myregister(){



    const [info , setInfo ] = useState({
        name:"",
        email:"",
        usrname:"",
        passwd:""

    })

    const [err, setErr ] = useState({
        name:null,
        email:null,
        usrname:null,
        passwd:null , 
        confpasswd:null

    })

    const handelfunc =(e)=>{
        console.log(e.target)

        if(e.target.id ==="nam"){
            setInfo({
                ...info ,
                name:e.target.value
            })
            setErr({
                

               ...err,
               name:
               e.target.value.length === 0 ? " The Name field is required "
               : null
                           
            })
            console.log(  info.name.length  , err.name ) ;
        }

        else if(e.target.id ==="mail"){
            setInfo({
                ...info ,
                email:e.target.value
            })
            setErr({

               ...err,
               email:
               e.target.value.length === 0 ? " The Email field is required "

               : !validEmail.test( e.target.value) ? " the email format is not valid "
               : null
                           
            })
        }

        else if(e.target.id ==="Unam"){
            setInfo({
                ...info ,
               usrname:e.target.value
            })
            setErr({

               ...err,
               usrname:
               e.target.value.length === 0 ? " The user name field is required "
               :  e.target.value.includes(" ") ? " The user name field shouldn't contain space   "
               : null
                           
            })
        }

       else if(e.target.id ==="pass"){
            setInfo({
                ...info ,
                passwd:e.target.value
            })
            setErr({

               ...err,
               passwd:
               e.target.value.length === 0 ? " The Password field is required "

               : !validPass.test( e.target.value) ? " the password should be at least 8 characters and should contain at least one lowercase and one uppercase letter and one number and one special character  "
               : null
                           
            })

        }
        
        else if (e.target.id ==="Cpass"){
            
            setErr({

               ...err,
               confpasswd:
               e.target.value.length === 0 ? " This field is required "

               :e.target.value !== info.passwd  ? " this field must match the  password field  "
               : null
                           
            })
            
        }


    }

    return(
        <div className="container  my-5 ">
            
			
			<h1 className="mt-5 text-center"> Register Form</h1>	
        <form onSubmit={(e)=>e.preventDefault()}  className="mt-4">
            <div class="form-group">
    <label for="nam">Name </label>
    <input type="text" class="form-control" id="nam"   value={info.name} onChange={(e)=>handelfunc(e)}  />
    <small id="nErr" className="form-text text-danger" > {err.name}</small>
  </div>
  <div class="form-group">
    <label for="mail">Email </label>
    <input type="email" class="form-control" id="mail" aria-describedby="Eerr" value={info.email} onChange={(e)=>handelfunc(e)}  />
    <small id="eErr" class="form-text text-danger"  >{err.email}</small>
  </div>
  <div class="form-group">
    <label for="Unam">User Name</label>
    <input type="text" class="form-control" id="Unam" aria-describedby="Uerr"  value={info.usrname} onChange={(e)=>handelfunc(e)}  />
    <small id="Uerr" class="form-text text-danger"  >{err.usrname}</small>
  </div>

  <div class="form-group">
    <label for="pass">Password</label>
    <input type="password" class="form-control" id="pass"  aria-describedby="Perr" value={info.passwd} onChange={(e)=>handelfunc(e)}  />
    <small id="Perr" class="form-text text-danger"  >{err.passwd}</small>
  
  </div>


  <div class="form-group">
    <label for="Cpass">Confirm Password</label>
    <input type="password" class="form-control" id="Cpass" aria-describedby="Cerr" onChange={(e)=>handelfunc(e)} />
    <small id="Cerr" class="form-text text-danger" > {err.confpasswd} </small>
  </div>
  

 <div className="d-flex justify-content-center mt-4">
  <button type="submit" class="btn btn-info btn-block"> Register </button> </div>
</form> <br/><br/>
	
</div>

    );





}

export default Myregister 