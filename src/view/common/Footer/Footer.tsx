    export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-green-700 mb-3">TechSphere</h2>
                    <p className="text-sm text-gray-400">
                        At TechSphere, we specialize in transforming ideas into powerful digital solutions. Your success is our mission.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Our Team</li>
                        <li className="hover:text-white cursor-pointer">Solutions</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">News</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Custom Software</li>
                        <li className="hover:text-white cursor-pointer">Mobile Applications</li>
                        <li className="hover:text-white cursor-pointer">Cloud Engineering</li>
                        <li className="hover:text-white cursor-pointer">AI & Machine Learning</li>
                        <li className="hover:text-white cursor-pointer">IT Consulting</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Contact Us</h3>
                    <p className="text-sm">+94 71 123 4567</p>
                    <p className="text-sm">hello@techsphere.lk</p>
                    <p className="text-sm mt-2">
                        789 Innovation Street, Level 5<br />
                        Colombo 07, Sri Lanka
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                © 2025 OrganicShop. All rights reserved. <span className="hover:underline cursor-pointer">Privacy Policy</span> | <span className="hover:underline cursor-pointer">Terms</span> | <span className="hover:underline cursor-pointer">Cookies</span>
            </div>
        </footer>
    );
}






















// import './Footer.css';
//
// export function Footer() {
//     return (
//         <div className="footer">
//             <h1>This is Footer</h1>
//         </div>
//     );
// }

// import './Footer.css';
//
// export function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-section">
//                     <h2>TechSphere</h2>
//                     <p>At TechSphere, we specialize in transforming ideas into powerful digital solutions. Your success is our mission.</p>
//                 </div>
//                 <div className="footer-section">
//                     <h3>Quick Links</h3>
//                     <ul>
//                         <li>Home</li>
//                         <li>Our Team</li>
//                         <li>Solutions</li>
//                         <li>Careers</li>
//                         <li>News</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>Our Services</h3>
//                     <ul>
//                         <li>Custom Software</li>
//                         <li>Mobile Applications</li>
//                         <li>Cloud Engineering</li>
//                         <li>AI & Machine Learning</li>
//                         <li>IT Consulting</li>
//                     </ul>
//                 </div>
//                 <div className="footer-section">
//                     <h3>Contact Us</h3>
//                     <p>+94 71 123 4567</p>
//                     <p>hello@techsphere.lk</p>
//                     <p>789 Innovation Street, Level 5<br />Colombo 07, Sri Lanka</p>
//                 </div>
//             </div>
//             <div className="footer-bottom">
//                 <p>© 2025 OrganicShop. All rights reserved. Privacy Policy | Terms | Cookies</p>
//             </div>
//         </footer>
//     );
// }
