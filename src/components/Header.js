import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
      height: 5rem;
    }
  `;

  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logo.png" alt="Logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
