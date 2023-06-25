import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaCommentAlt } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title> Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-10">
        {/* Page content here flex flex-col items-center justify-center */}
        <Outlet></Outlet>
        
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to='/dashboard/home'><FaHome></FaHome> USER HOME</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reserve'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history' ><FaWallet></FaWallet>Payment History</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to='/'><FaHome></FaHome>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/menu'><FaShoppingCart></FaShoppingCart>SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"><FaHome></FaHome>ORDER</NavLink>
          </li>
          <li>
            <NavLink to="/contact"><FaCommentAlt></FaCommentAlt> Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
