import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';




const Navbar = () => {

    const navLinks = <>
  
    <li className=""><Link>Home</Link> </li>
    <li><Link to="about">About</Link> </li>
    
    <li><Link to="portfolio">Portfolio</Link> </li>
    </>
    return (
        <>

        <div className="navbar  bg-opacity-30 
         max-w-screen-xl  ">
<div className="navbar-start">
 <div className="dropdown">
   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </div>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
   {navLinks}
   </ul>
 </div>
 

 <p className="font-bold italic text-3xl  text-yellow-500">Nusrat</p>
</div>
<div className="navbar-center hidden lg:flex">
 <ul className="menu menu-horizontal px-1">
 {navLinks}
 </ul>
</div>
<div className="navbar-end">
<Link to="contact"><button className="btn btn-outline btn-warning"> Contact</button></Link>


</div>

</div> 
     </>
    );
};

export default Navbar;