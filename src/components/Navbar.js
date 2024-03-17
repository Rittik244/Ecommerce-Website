import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { total_item } = useCartContext();

  const [menuIcon, setMenuIcon] = useState();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

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
              <span className="cart-bag-count">{total_item}</span>
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <button
                className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="btn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-navbar-icon bar-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-navbar-icon cross-icon"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .btn {
    text-transform: uppercase;
    padding: 1.2rem 2.5rem;
    background-color: #de3163;

    &:hover {
      background-color: #c21e56;
    }
  }

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
      font-size: 1.5rem;
      text-transform: uppercase;
      color: slategray;
      transition: color 0.3s linear;
      letter-spacing: 1px;

      .cart-bag {
        width: 2rem;
        height: 2rem;
      }

      .cart-bag-count {
        color: white;
        width: 1.8rem;
        height: 1.8rem;
        background-color: #ee4b2b;
        border-radius: 50%;
        font-size: 1.2rem;
        display: grid;
        place-items: center;
        position: absolute;
        top: -30%;
        left: 70%;
      }

      &:hover,
      &.active {
        color: #ee4b2b;
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

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .navbar-lists {
      gap: 1rem;
    }
    .btn {
      padding: 1rem 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-navbar-icon {
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: 25%;
        right: 5%;
        color: rgba(29, 29, 29, 0.8);
      }
    }

    .active .bar-icon,
    .cross-icon {
      display: none;
      z-index: 9999;
    }

    .active .cross-icon {
      display: inline-block;
      position: fixed;
      top: 25px;
    }

    /* SIDE BAR NOT ACTIVE */
    .navbar-lists:not(.active) {
      width: 70vw;
      height: 100vh;
      position: absolute;
      top: 0;
      right: -100%;
      flex-direction: column;
      opacity: 0;
      gap: 2.5rem;
      background-color: rgba(225, 240, 250, 0.9);
      transition: all 0.3s linear;
    }

    /* SIDE BAR ACTIVE */
    .active .navbar-lists {
      position: fixed;
      opacity: 1;
      right: 0;
      z-index: 999;
    }

    /* WRAP CLASSES INSIDE "NAVBAR LISTS" */
    .navbar-lists {
      .navbar-link {
        font-size: 3rem;

        &:hover::after,
        &.active::after {
          width: 100%;
          left: 0;
        }

        @keyframes line {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }
      }

      .cart-bag-link {
        position: relative;

        .cart-bag {
          width: 3rem;
          height: 3rem;
          position: relative;
        }

        .cart-bag-count {
          width: 2rem;
          height: 2rem;
          font-size: 1.4rem;
          top: -35%;
          left: 80%;
        }
      }
    }

    .btn {
      font-size: 2rem;
    }
  }
`;

export default Navbar;
