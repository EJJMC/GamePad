// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           testing 123 <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import ControllerInput from "./pages/ControllerInputScreen";
import Info from "./pages/Info";

import Numpad from "./pages/Numpad";
import Tatsu from "./pages/Tatsu";
import NumpadFreePlay from "./pages/NumpadFreePlay";
import ReverseQCF from "./pages/ReverseQCF";
// import ReverseDP from "./pages/ReverseDP";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ControllerInput" element={<ControllerInput />} />
        <Route path="/info" element={<Info />} />
        <Route path="/ReverseQCF" element={<ReverseQCF />} />
        {/* <Route path="/ReverseDP" element={<ReverseDP />} /> */}
        <Route path="/numpad" element={<Numpad />} />
        <Route path="/Tatsu" element={<Tatsu />} />
        <Route path="/NumpadFreePlay" element={<NumpadFreePlay />} />
        <Route
          path="/ControllerInputDP"
          element={<ControllerInputScreenDP />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
