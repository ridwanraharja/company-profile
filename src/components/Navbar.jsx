import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="w-full h-full flex justify-between items-center px-2">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 md:text-4xl">URBRAND</h1>
          <ul className={"hidden md:flex"}>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="home" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platform
              </Link>
            </li>
            <li className="cursor-pointer hover:text-indigo-600">
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="mr-4 md:hidden" onClick={menuHandler}>
          {!showMenu ? (
            <FontAwesomeIcon icon={faBars} cursor="pointer" />
          ) : (
            <FontAwesomeIcon icon={faXmark} cursor="pointer" />
          )}
        </div>
      </div>
      <ul
        className={!showMenu ? "hidden" : "absolute bg-zinc-200 px-8 w-full "}
      >
        <li className="border-b-2 border-zinc-300 w-full hover:text-indigo-600">
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-indigo-600">
          <Link
            className="cursor-pointer"
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-indigo-600">
          <Link
            className="cursor-pointer"
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-indigo-600">
          <Link
            className="cursor-pointer"
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platform
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-indigo-600">
          <Link
            className="cursor-pointer"
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
