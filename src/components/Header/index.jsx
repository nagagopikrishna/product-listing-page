import {Link} from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"
// import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import './index.css'


const Header = () =>(

    <nav className='nav-container'>
        {/*  tablet view */}
        <ul className='tablet-view-container'>
            <li>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740804325/element-4_wmceis.png" alt = "image"/>
                <p> Lorem ipsum dolor </p>
            </li>
            <li>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740804325/element-4_wmceis.png" alt = "image"/>
                <p> Lorem ipsum dolor </p>
            </li>
            <li>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740804325/element-4_wmceis.png" alt = "image"/>
                <p> Lorem ipsum dolor </p>
            </li>
        </ul>

        {/* mobile view */}
        <ul className='mobile-view-container'>
            <li>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740804325/element-4_wmceis.png" alt = "image"/>
                <p> Lorem ipsum dolor </p>
            </li>
        </ul>

        <div  className='logo-container'>
            <div className="log-container-tablet">
                <ul className='logo-details-container'>
                    <Link to="/"><img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740810655/Logo_pqcdba.png' alt='logo' className="logo-image"/></Link>
                    <h1 className="logo"> LOGO </h1>
                    <ul className="icons-container">
                        {/* <FiSearch size={26} color="black"/> */}
                        <Link to = "/fav"><FaRegHeart size={26} color="black"/></Link>
                        <Link to="/cart"><HiOutlineShoppingBag size={26} color="black"/></Link>
                        <Link to="/profile"><CgProfile size={26} color="black"/></Link>
                        <select className="lan-selector">
                            <option value="Eng"> Eng</option>
                            <option value="Tel">Tel</option>
                            <option value="Hin">Hin</option>
                        </select>
                    </ul>
                    
                </ul>
                <ul className="item-sections">
                    <li className="items">SHOP</li>
                    <li className="items">SKILLS</li>
                    <li className="items">STORIES</li>
                    <li className="items">ABOUT</li>
                    <li className="items">CONTACT US</li>
                </ul>
            </div>
            <div className="logo-container-mobile">
                <div className="menu-container">
                    <RxHamburgerMenu color="black" size={20}/>
                    <Link to="/"><img src='https://res.cloudinary.com/ddc7e5e7s/image/upload/v1740810655/Logo_pqcdba.png' alt='logo' className="logo-image"/></Link>
                </div>
                <h1 className="logo"> LOGO </h1>
                <ul className="icons-container">
                    {/* <FiSearch size={20} color="black"/> */}
                    <Link to="/fav"><FaRegHeart size={20} color="black"/></Link>
                    <Link to="/cart"><HiOutlineShoppingBag size={20} color="black"/></Link>
                    <Link to="/profile"><CgProfile size={20} color="black"/></Link>
                </ul>
            </div>
        </div>

        
        
    </nav>


)

export default Header