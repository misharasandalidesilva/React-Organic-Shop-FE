import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 px-6 py-4 flex justify-between items-center">
            {/* Left: Logo + Business Name */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                <p className="text-xl font-bold text-green-700">Organic Shop</p>
            </div>

            {/* Right: Links + Button */}
            <div className="flex items-center gap-6">
                <ul className="flex items-center gap-6 text-gray-400 font-medium">
                    <li>
                        <Link to="/" className="hover:text-green-600 transition duration-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-green-600 transition duration-200">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-green-600 transition duration-200">Contact</Link>
                    </li>
                    <li>
                        <Link to="/shopping-cart" className="hover:text-green-600 transition duration-200">My Cart</Link>
                    </li>
                </ul>
                <Link
                    to="/login"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-200"
                >
                    Sign In
                </Link>
            </div>
        </nav>
    );
}






























// import './Navbar.css';
// import logo from "../../../assets/logo.png";
// import {Link} from "react-router-dom";
//
// export function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="navbar-left">
//                 <img src={logo} alt="" className="icon"/>
//                 <p className="buisness-name">Organic Shop</p>
//             </div>
//
//             <div className="navbar-right">
//                <ul>
//                    <li>
//                        <Link to="/">Home</Link>
//                    </li>
//                    <li>
//                        <Link to="/about">About</Link>
//                    </li>
//                    <li>
//                        <Link to="/contact">Contact</Link>
//                    </li>
//                </ul>
//                 <button>
//                     <Link to="login">Sign IN</Link>
//                 </button>
//             </div>
//         </nav>
//     );
// }














// import './Navbar.css';
//
// export function Navbar() {
//     return (
//         <div className={"navbar"}>
//             <h1>This is Navbar</h1>
//         </div>
//     );
// }

