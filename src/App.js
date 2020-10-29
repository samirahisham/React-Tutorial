import "./App.css";
import Header from "./Components/Header";
import BasicReact from "./Components/BasicReact";
import { Route, Switch } from "react-router-dom";
function App() {
  const someNumber = 7;
  return (
    <Switch>
      <Route path="/basic" component={BasicReact} />
      <Route path="/" component={Header} />
    </Switch>
  );
}

export default App;
