import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MinishellDetail from "./pages/MinishellDetail";
import Cub3DDetail from "./pages/Cub3DDetail";
import EasyChatDetail from "./pages/EasyChatDetail";
import InceptionDetail from "./pages/InceptionDetail";
import FlappyBirdDetail from "./pages/FlappyBirdDetail";
// import PuyoGameDetail from "./pages/PuyoGameDetail";

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop /> 
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/minishell" element={<MinishellDetail />} />
            <Route path="/projects/cub3D" element={<Cub3DDetail />} />
            <Route path="/projects/easyChat" element={<EasyChatDetail />} />
            <Route path="/projects/inception" element={<InceptionDetail />} />
            <Route path="/projects/flappyBird" element={<FlappyBirdDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
