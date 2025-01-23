import { Outlet } from "react-router-dom";
import NavBar from "./nav";
import Footer from "./footer";

export default function Layout() {
    return (
        <div className="">
            <NavBar />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}