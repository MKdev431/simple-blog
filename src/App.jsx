import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Pages from "./Pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Pages />
      </div>
    </Router>
  );
}

export default App;
