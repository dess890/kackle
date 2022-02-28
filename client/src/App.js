import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Chat from './components/Chat';
import RegisterUser from './pages/RegisterUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterUser />}/>
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
