import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  const firstName = (inputString) => {
    const firstWordLetters = inputString.match(/^[a-zA-Z]+/);
    return firstWordLetters ? firstWordLetters[0] : "";
  };

  return (
    <MainHeader>
      <div className="header">
        <div>
          <NavLink to="/">
            <img className="logo" src="./images/logo.png" alt="Logo" />
          </NavLink>
          {isAuthenticated && <p>Welcome!, {firstName(user.name)}</p>}
          <p style={{opacity: 0}}></p>
        </div>
        <Navbar />
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  .header {
    padding: 0 4.8rem;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
    
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .logo {
    height: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .header {
      padding: 0 3rem;
      
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    div{
        width: 100%;
        justify-content: space-between;
      }
  }
`;

export default Header;
