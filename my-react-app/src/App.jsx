import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import HomePage from "./pages/HomePage";
import Translator from "./Component/Translator/Translator";
import ContactInfo from "./Component/ContactInfo/contactinfo";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/translator" element={<Translator/>} />
          <Route path="/contactus" element={<ContactInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
