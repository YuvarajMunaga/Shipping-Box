import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBox from "./components/AddBox";
import BoxList from "./components/TableView";
import NavBar from "./components/NavBar";
import CONSTANTS from "./Atoms/Constants";
import "./App.css";

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const {
    ROUTES: { ADD_BOX, BOX_LIST },
  } = CONSTANTS;

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div>
          <Routes>
            <Route path={ADD_BOX} element={<AddBox addBox={addBox} />} />
            <Route path={BOX_LIST} element={<BoxList boxes={boxes} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
