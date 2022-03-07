import SideNav from "./components/SideNav";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import img from './img/kacklelogo.png'
import RegisterUser from './pages/RegisterUser'
import Test from './pages/Test';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/reducers/userReducer';

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser)
  }, [dispatch])
  const user = useSelector(state => state.user.user)
  return (
    <div className="App">
      <img src={img} style={{ paddingLeft: '45%', marginBottom: '0%' }} />
        <div>
          {user && <SideNav />}
        </div>
        <div style={{marginLeft: "300px"}}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterUser />} />
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>
        </div>
    </div>
  );
}
