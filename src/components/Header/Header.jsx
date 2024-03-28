import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <div className="flex gap-5">
        <li><NavLink to='/' className={({ isActive }) => isActive ? ' bg-[#62d150]  font-bold' :  ' font-bold'}>Home</NavLink></li>
        <li><NavLink to='/listed' className={({ isActive }) => isActive ? 'bg-[#62d150] font-bold' : 'font-bold'} >Listed Books</NavLink></li>
        <li><NavLink to='/pages' className={({ isActive }) => isActive ? 'bg-[#62d150] font-bold' : 'font-bold'}>Pages to Read</NavLink></li>
    </div>
    return (
        <div className="navbar bg-base-100 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl  text-green-500">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <a className="btn text-white  bg-[#62d150] ">Sign In</a>
                <a className="btn text-white  bg-[#59c6d2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;