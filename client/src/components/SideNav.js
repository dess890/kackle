//import useState hook to create menu collapse state
import React, { useEffect, useState } from "react";
import img from '../img/kackle.png'

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import {
    FiHome,
    FiLogIn,
    FiLogOut,
} from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setUserLoggedOut } from "../redux/reducers/userReducer";


const SideNav = () => {
    const dispatch = useDispatch()
    //state for active menu item
    const [isActive, setIsActive] = useState('home')
    // state for user
    const userRedux = useSelector(state => state.user.user)
    const [userState, setUserState] = useState(userRedux)


    // checking for window location and user to render sidebar menu items
    useEffect(() => {
        if (window.location.pathname === "/home") {
            setIsActive("home")
        }
        if (window.location.pathname === "/") {
            setIsActive("landing")
        }
        setUserState(userRedux)
    }, [isActive, userRedux])


    //logout function for logout button on bottom of
    const userLogout = () => {
        setIsActive("")
        dispatch(setUserLoggedOut)
        fetch('/auth/logout', {
            method: 'POST'
        })
    }

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={false}>
                    {" "}
                    {/* {menuCollapse} */}
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <img src={img} alt="kackle logo, a chat bubble with a heart in it" />
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {/* {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />} */}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        {userState && (
                            <Menu iconShape="square">
                                <MenuItem active={isActive === "home"} onClick={() => setIsActive("home")} icon={<FiHome />}><Link to="/home"></Link>Home</MenuItem>
                                <MenuItem active={isActive === "socials"} onClick={() => setIsActive("socials")} icon={<BiChat />}><Link to='/Socials'></Link>Socials</MenuItem>
                                <MenuItem active={isActive === "profile"} onClick={() => setIsActive("profile")} icon={<CgProfile />}><Link to='/UserProfile'></Link>Profile</MenuItem>
                            </Menu>
                        )}
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            {userState ? (
                                <MenuItem icon={<FiLogOut />} onClick={userLogout}><Link to='/'></Link>Logout</MenuItem>
                            ) : (
                                <MenuItem active={isActive === "login"} onClick={() => setIsActive("login")} icon={<FiLogIn />} ><Link to='/Login'></Link>Login</MenuItem>
                            )}
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideNav;
