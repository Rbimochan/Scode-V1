import React from "react";

const Navbar = () => {
return (
    <nav className="sticky bottom-12 bg-transparent text-black " >
        <div className="container mx-auto flex justify-between items-center p-4 rounded-full bg-brown-700">
           

            {/* Center Links */}
            <div className="flex-1 flex justify-center space-x-9">
                <a href="#home" className="hover:text-gray-300 font-bold">
                    HOME
                </a>
                <a href="#work" className="hover:text-gray-300">
                    WORK
                </a>
                <a href="#services" className="hover:text-gray-300">
                    SERVICES
                </a>
                <a href="#agency" className="hover:text-gray-300">
                    AGENCY
                </a>
                <a href="#contact" className="hover:text-gray-300">
                    CONTACT
                </a>
                <a href="#ideas" className="hover:text-gray-300">
                    IDEAS
                </a>
            </div>

           
        </div>
    </nav>
);
};

export default Navbar;