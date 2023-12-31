import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Footer/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signup') ;

    return (
        <div>
            {isLogin || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;