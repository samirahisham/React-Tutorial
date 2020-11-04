import "./App.css";
import Header from "./Components/Header";
import BasicReact from "./Components/BasicReact";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
function App() {
  const someNumber = 7;
  return (
    <Switch>
      <Route path="/basic" component={BasicReact} />
      <Route path="/header" component={Header} />
      <Route path="/" component={LoginForm} />
    </Switch>
  );
}

export default App;
