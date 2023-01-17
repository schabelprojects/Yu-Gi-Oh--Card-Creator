// @ts-ignore
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import YugiohCardDatabase from "./components/YugiohCardDatabase/YugiohCardDatabase";
import YugiohCardCreator from "./components/YugiohCardCreator/YugiohCardCreator";
import CardDataBase from "./components/CardDatabase/CardDatabase";
import CharacterIndex from "./components/CharakterIndex/CharacterIndex";
import AboutPage from "./components/AboutPage/AboutPage";
import CardCreatorIntroPage from "./components/CardCreatorIntroPage/CardCreatorIntroPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cardlist" element={<YugiohCardDatabase />} />
          <Route path="/introduction" element={<CardCreatorIntroPage />} />
          <Route path="/cardcreator" element={<YugiohCardCreator />} />
          <Route path="/cardcreatordatabase" element={<CardDataBase />} />
          <Route path="/character" element={<CharacterIndex />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
