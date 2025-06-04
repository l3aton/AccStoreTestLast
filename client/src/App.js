import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.js";
import NavBar from "./components/navbar.js";
import Footer from './components/footer.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
