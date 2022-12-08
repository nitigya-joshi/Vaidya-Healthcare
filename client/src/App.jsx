import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
        <Body />
    </BrowserRouter>
  );
}

export default App;
