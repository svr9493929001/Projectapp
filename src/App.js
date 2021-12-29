import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Home } from "./Home";
import { RecipesDetailes } from "./RecipesDetailes";
import { Addrecipes } from "./Addrecipes";
import { Editrecipes } from "./Editrecipes";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar className="main-menu">
          <Link to="/">Home</Link>
          <Link to="/addrecipes">Add recipes</Link>
        </Toolbar>
      </AppBar>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/recipes/:id" exact>
            <RecipesDetailes />
          </Route>
          <Route path="/addrecipes" exact>
            <Addrecipes />
          </Route>
          <Route path="/recipes/edit/:id">
            <Editrecipes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
