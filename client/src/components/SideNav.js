//import useState hook to create menu collapse state
import React, { useState } from "react";
import img from './kackle.png'

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
import { FaRegHeart } from "react-icons/fa";
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle,
    FiTrendingUp
} from "react-icons/fi";
import { BiCog, BiChat } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNav.css";
import { Link } from "react-router-dom";

const SideNav = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    // const logo = "K";

    const bigLogo = "Kackle";

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
                            <p><img src={img} /> </p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {/* {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />} */}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <Link to="/">
                                <MenuItem active={true} icon={<FiHome />}>
                                    Home
                                </MenuItem>
                            </Link>
                            <MenuItem icon={<FiTrendingUp />}>Trending</MenuItem>
                            <MenuItem icon={<FaRegHeart />}>Liked</MenuItem>
                            <MenuItem icon={<BiChat />}>Chat</MenuItem>
                            <Link to='/UserProfile'>
                                <MenuItem icon={<CgProfile />}>Profile</MenuItem>
                            </Link>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideNav;
