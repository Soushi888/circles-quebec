import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./pages/Accueil";
import Register from "./pages/Register";
import Repertoire from "./pages/Repertoire";

function App() {
  return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/repertoire" component={Repertoire} />
        </Switch>
      </>
  );
}

export default App;
