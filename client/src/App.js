import "./App.css";
import SideNav from "./components/SideNav";
import ScrollDiv from "./components/ScrollDiv";
import StaticDiv from "./components/StaticDiv";
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import { GridItem } from '@chakra-ui/react';
import img from './img/kacklelogo.png'

export default function App() {
  return (
    <div className="App">
      <img src={img} style={{ paddingLeft: '45%', marginBottom: '0%' }} />
      <GridItem rowSpan={2} colSpan={1} style={{}}>
        <SideNav />
      </GridItem>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}
