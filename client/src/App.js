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
import Socials from './pages/Socials';
import Landing from './pages/Landing';

export default function App() {
  //grabbing user from redux
  const user = useDispatch(state => state.user.user)
  //grabbing current user upon page load
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser)
  }, [dispatch])


  return (
    <div className="App">
      <img src={img} style={{ paddingLeft: '45%', marginBottom: '0%' }} />
      {/* <Chat /> */}
      <div>
        <SideNav />
      </div>
      <div>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterUser />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Socials" element={<Socials />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
}
