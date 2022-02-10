import { BrowserRouter as Router , Route , Switch  } from "react-router-dom"
 import Movies from './pages/movies';
 import Home from './pages/home';
import Navbar from "./navbar" 
import Movie from './pages/moviedetails';
import Mylogin from './pages/login';
import Myregister from './pages/register';
import Fav_items from "./pages/favorites";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route  path="/home" component={Home} exact />  
        <Route  path="/movies" component={Movies} exact /> 
         <Route  path="/showmovie/:id" component={Movie} exact />    
        <Route  path="/login" component={Mylogin} exact />   
        <Route  path="/register" component={Myregister} exact />
        <Route  path="/favourite" component={Fav_items} exact />     
      </Switch>

    </Router>
  );
}

export default App;
