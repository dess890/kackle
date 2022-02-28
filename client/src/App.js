import "./App.css";
import SideNav from "./components/SideNav";
import ScrollDiv from "./components/ScrollDiv";
import StaticDiv from "./components/StaticDiv";
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div className="App">
      <SideNav />
      <div className="container">
        <div className="row">
          <ScrollDiv />
          <StaticDiv />
        </div>
        <div className="row2">
          <ScrollDiv />
          <StaticDiv />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
