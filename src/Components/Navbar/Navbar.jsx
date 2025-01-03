import {  useEffect, useState } from "react";
import { Collapse, NavbarWrapper, ParentWrapper } from "./style";
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll';
import Destination from "../Destination/Destination";
import Home from "../Home/Home";
import { FormDestination } from "../FormDestination/FormDestination";
import { Index } from "../SignInUp/Index";
import { FAQ } from "../EnquiryForm/FAQ";


export const Navbar = () => {
 
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  
  useEffect(() => {
    // Sync the user state with localStorage when it's updated
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);
 
  const handleLogout = () => {
    // Remove the "user" object from localStorage
    console.log("hi")
    localStorage.setItem("user",JSON.stringify({...user,login:false}))  // This deletes the "user" from localStorage

    console.log(localStorage.getItem("user"))
    // Update the state to reflect logout
    setUser(null);

    // Scroll to the login section after logout
    scroller.scrollTo("login", { duration: 1500, delay: 100, smooth: true, offset: -50 });
  };

  const navbarItems = [
    {
      name: "Home",
      clickEvent: () => {
        scroll.scrollToTop();
      }
    },
    {
      name: "FAQ",
      clickEvent: () => {
        scroller.scrollTo("faq", {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -50, // Adjust the offset if needed
        });
      }
    },
    {
      name: user?.login ? "Logout" : "Login",
      clickEvent:user?.login?handleLogout
        : () => {
            scroller.scrollTo("login", { duration: 1500, delay: 100, smooth: true, offset: -50 });
          
      }
    },
    {
      name: "Weather/Activities",
      clickEvent: () => {
        scroll.scrollToBottom();
      }
    }
  ];
  
  const [collapse, setCollapse] = useState(false);
  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <ParentWrapper>
        <NavbarWrapper className="text-2xl py-2">
          <Link to="home" smooth={true} duration={500}>
            <img className="h-10 w-11" src='./logo.webp' alt="logo" />
          </Link>
          <NavbarWrapper>
            {navbarItems.map((nav) => (
              <Link
              onClick={nav.clickEvent}
                key={nav.name}
                to={nav.name.toLowerCase()}  // Ensure to link to the correct section
                smooth={true}
                spy={true} // Enables scrollSpy
                activeClass="active" // Adds an active class when in view
                duration={500} // Scroll duration
                style={{ paddingLeft: "2rem" }}
              >
                {nav.name}
              </Link>
            ))}
          </NavbarWrapper>
        </NavbarWrapper>
       {/** collapse for small screen */}
        <Collapse className="text-sm px-1">
          <div onClick={handleClick}>
            <div to="home">
              <img className="h-10 w-11" src='./logo.webp' alt="logo" />
            </div>
          </div>
          {collapse && (
            <div >
              {navbarItems.map((nav) => (
                <Link className=" block"
                  key={nav.name}
                  to={nav.name.toLowerCase()}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                  duration={500}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          )}
        </Collapse>
      </ParentWrapper>
      {/* my elements which scrolled */}
      <Element name="home">
        <Home />
      </Element>
      <Element name="destination">
        <Destination />
      </Element>
      <Element name="weather/activities">
        <FormDestination />
      </Element>
      <Element name="faq">
        <FAQ/>
      </Element>
      {user?.login?<Element style={{ display: "none" }} name="logout">
        Logout
      </Element>:
      <Element name="login">
        <Index />
      </Element>}
      
    </>
  );
};
