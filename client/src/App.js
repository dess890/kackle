import SideNav from "./components/SideNav";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import img from './img/kacklelogo.png'
import RegisterUser from './pages/RegisterUser'
import Test from './pages/Test';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/reducers/userReducer';
import TwitterFeed from "./pages/TwitterFeed";

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser)
  }, [dispatch])
  return (
    <div className="App">
        <div>
          <SideNav />
        </div>
        {/* <div style={{marginLeft: "300px"}}> */}
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterUser />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/trending" element={<TwitterFeed />} />
          </Routes>
        {/* </div> */}
    </div>
  );
}
