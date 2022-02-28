import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Chat from './components/Chat';
import RegisterUser from './pages/RegisterUser';

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
        <Route path="/Register" element={<RegisterUser />}/>
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}
