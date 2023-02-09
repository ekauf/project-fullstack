import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ViewLocations from "./containers/ViewLocations/ViewLocations";
import CreateLocation from "./containers/CreateLocation/CreateLocation";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/locations" element={<ViewLocations />} />
        <Route path="/locations/new" element={<CreateLocation />} />
      </Routes>
    </Router>
  );
};

export default App;
