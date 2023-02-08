import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
    </Router>
  );
};

export default App;
