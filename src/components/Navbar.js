import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link products-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link about-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link contact-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-bag-link"
              onClick={() => setMenuIcon(false)}
            >
              <FaBagShopping className="cart-bag" />
              <span className="cart-bag-count">10</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-navbar-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-navbar-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 1.8rem;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 1.2rem;
      position: relative;
    }

    .navbar-link {
      &:link,
      &:visited {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: slategray;
        transition: color 0.3s linear;
        letter-spacing: 1px;
      }

      .cart-bag {
        /* color: #EE4B2B; */
        width: 20px;
        height: 20px;
      }

      .cart-bag-count {
        color: white;
        width: 1.8rem;
        height: 1.8rem;
        background-color: #ee4b2b;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: 600;
        display: grid;
        place-items: center;
        position: absolute;
        top: -30%;
        left: 70%;
      }

      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.links};
      }

      &:hover::after,
      &.active::after {
        content: "";
        width: 30%;
        height: 2px;
        background-color: #ee4b2b;
        position: absolute;
        bottom: -4px;
        left: 12px;
        animation: line 0.3s linear 1;
      }

      @keyframes line {
        0% {
          width: 0%;
        }

        100% {
          width: 30%;
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  // .user-login--name {
  //   text-transform: capitalize;
  // }

  // .user-logout,
  // .user-login {
  //   font-size: 1.4rem;
  //   padding: 0.8rem 1.4rem;
  // }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      transition: all 3s linear;

      .mobile-navbar-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
        transition: all 3s linear;
      }
    }

    .active .mobile-navbar-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 5%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
      transition: all 3s linear;
    }

    .active .close-outline {
      transition: all 3s linear;
      display: inline-block;
    }

    .navbar-lists {
      width: 80vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      /* background-color: #fff; */
      background-color: thistle;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-bag-link {
      position: relative;

      .cart-bag {
        width: 40px;
        height: 40px;
        position: relative;
        font-size: 5.2rem;
      }

      .cart-bag-count {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    // .user-logout,
    // .user-login {
    //   font-size: 2.2rem;
    //   padding: 0.8rem 1.4rem;
    // }
  }
`;

export default Navbar;
