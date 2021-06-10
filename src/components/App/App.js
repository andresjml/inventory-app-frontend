import './App.css'
import {Switch, Route} from "react-router-dom"
import Home from "../Home/Home"
import NavBar from "../NavBar/NavBar"
import ItemsContainer from "../ItemsContainer/ItemsContainer"

function App() {
  return (
    <div className="bg-transparent">              
       <NavBar />
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/inventory">
              <ItemsContainer />
          </Route>
          <Route path="*">
              <h1> 404 not found</h1>
          </Route>
       </Switch>
    </div>   
  );
}

export default App;
