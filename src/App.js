import { Route, Switch } from "react-router-dom";

import MovieApp from "./components/MovieApp";
import Descriptions from "./components/Descriptions/Descriptions";
// import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar";
import Test from "./components/test";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      {/* <MovieApp />  */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/Descriptions" component={Descriptions} />
        <Route path="/test" component={Test} />
        <Route path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
