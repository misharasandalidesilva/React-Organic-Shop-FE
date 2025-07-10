// import { Route, Routes } from "react-router-dom";
// import { Home } from "../../pages/Home/Home";
// import { About } from "../../pages/About/About";
// import { Contact } from "../../pages/Contact/Contact";
// import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
// import {itemsList} from "../ModifyCart/ModifyCart.tsx";
//
// export function MainContent() {
//     return (
//         <main className="flex-1 min-h-screen px-6 py-10 bg-gray-50">
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/shopping-cart" element={<ShoppingCart  itemList={itemsList}/>} />
//             </Routes>
//         </main>
//     );
// }

import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";

export function MainContent() {
    return (
        <div className="flex justify-center
                       items-center min-h-screen">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            </Routes>
        </div>
    );
}












// import './MainContent.css';
// import {Route, Routes} from "react-router-dom";
// import {Home} from "../../pages/Home/Home.tsx";
// import {About} from "../../pages/About/About.tsx";
// import {Contact} from "../../pages/Contact/Contact.tsx";
//
// export function MainContent() {
//     return (
//         <div className={"main-content"}>
//             <Routes>
//                 <Route path="/" element={<Home />}></Route>
//                 <Route path="/about" element={<About />}></Route>
//                 <Route path="/contact" element={<Contact />}></Route>
//             </Routes>
//         </div>
//     );
// }
//
//
