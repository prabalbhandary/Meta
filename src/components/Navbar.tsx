import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import computer from "../assets/computer.svg";
import cloud from "../assets/cloud.svg";
import support from "../assets/support.svg";
import web from "../assets/web.svg";
import qa from "../assets/qa.svg";
import devops from "../assets/devops-sm.svg";
import mobile from "../assets/mobile.svg";
import uiux from "../assets/ui.svg";
import blockchain from "../assets/blockchain-sm.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path: string) => location.pathname === path;

  const servicesDropDown = [
    {
      name: "Custom Software Development",
      photo: computer,
      text: "Tailored software solutions for your needs.",
      link: "/services/custom-software-development",
    },
    {
      name: "Cloud Computing Services",
      photo: cloud,
      text: "Use the internet to improve your business.",
      link: "/services/cloud-computing-services",
    },
    {
      name: "Maintenance and Support",
      photo: support,
      text: "Keep your software running smoothly.",
      link: "/services/maintenance-and-support",
    },
    {
      name: "Web Development",
      photo: web,
      text: "Website that works on all devices.",
      link: "/services/web-development",
    },
    {
      name: "Quality Assurance and Testing",
      photo: qa,
      text: "Checking software for reliability.",
      link: "/services/quality-assurance-and-testing",
    },
    {
      name: "DevOps",
      photo: devops,
      text: "Faster and safer software delivery.",
      link: "/services/devops",
    },
    {
      name: "Mobile App Development",
      photo: mobile,
      text: "Apps for phones and tablets.",
      link: "/services/mobile-app-development",
    },
    {
      name: "UI/UX Designing",
      photo: uiux,
      text: "Creating user-friendly interfaces.",
      link: "/services/ui-ux-designing",
    },
    {
      name: "Blockchain Solutions",
      photo: blockchain,
      text: "Secure technology for your business.",
      link: "/services/blockchain-solutions",
    },
  ];

  return (
    <header className="bg-blue-500 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">MetaLogic</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-gray-900 font-semibold" : "text-white"
            } hover:text-gray-900 transition`}
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center cursor-pointer ${
                location.pathname.startsWith("/services")
                  ? "text-gray-900 font-semibold"
                  : "text-white"
              } hover:text-gray-900 transition`}
            >
              Services
              {isOpen ? (
                <FaChevronUp className="ml-1" />
              ) : (
                <FaChevronDown className="ml-1" />
              )}
            </button>

            {isOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-80 p-4 grid grid-cols-1 gap-4 z-50">
                {servicesDropDown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={item.photo} alt={item.name} className="w-6 h-6" />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/career"
            className={`${
              isActive("/career")
                ? "text-gray-900 font-semibold"
                : "text-white"
            } hover:text-gray-900 transition`}
          >
            Career
          </Link>
          <Link
            to="/blogs"
            className={`${
              isActive("/blogs")
                ? "text-gray-900 font-semibold"
                : "text-white"
            } hover:text-gray-900 transition`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about")
                ? "text-gray-900 font-semibold"
                : "text-white"
            } hover:text-gray-900 transition`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="ml-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-6 space-y-3">
          <Link
            to="/"
            className={`block ${
              isActive("/") ? "text-gray-900 font-semibold" : "text-black"
            } hover:text-gray-900 transition`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>

          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={toggleDropdown}
              className={`flex items-center w-full ${
                location.pathname.startsWith("/services")
                  ? "text-gray-900 font-semibold"
                  : "text-black"
              } hover:text-gray-900`}
            >
              Services
              {isOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            {isOpen && (
              <div className="mt-2 space-y-2">
                {servicesDropDown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block pl-4 text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      toggleMobileMenu();
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/career"
            className={`block ${
              isActive("/career")
                ? "text-gray-900 font-semibold"
                : "text-black"
            } hover:text-gray-900 transition`}
            onClick={toggleMobileMenu}
          >
            Career
          </Link>
          <Link
            to="/blogs"
            className={`block ${
              isActive("/blogs")
                ? "text-gray-900 font-semibold"
                : "text-black"
            } hover:text-gray-900 transition`}
            onClick={toggleMobileMenu}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`block ${
              isActive("/about")
                ? "text-gray-900 font-semibold"
                : "text-black"
            } hover:text-gray-900 transition`}
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-white bg-gray-900 px-4 py-2 rounded text-center hover:bg-blue-700 transition"
            onClick={toggleMobileMenu}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
