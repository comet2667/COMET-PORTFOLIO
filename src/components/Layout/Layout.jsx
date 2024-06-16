import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useRef } from "react";
import Home from "../../pages/Home/Home";

function Layout(){

    const menuRef = useRef([]);


    return(
        <>
            <Header menuRef={menuRef}/>
            <Home menuRef={menuRef}/>
        </>
    );
}
export default Layout;