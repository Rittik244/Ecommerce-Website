import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* COLORS */
/* 
    BUTTON :- #de3163, #ee4b2b, #088178

    HOVER  :- #c21e56, #d22b2b, 
 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
}
  
  
html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
}
  
body {
    overflow-x: hidden;
    scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
  
body::-webkit-scrollbar {
    width: 1.5rem;
}
  
body::-webkit-scrollbar-track {
    background-color: rgb(24 24 29);
}
  
body::-webkit-scrollbar-thumb {   
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
  
h1,
h2,
h3,
h4 {
    font-family: "Work Sans", sans-serif;
}
  
h1 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
}
  
h2 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
}
  
h3 {
    font-size: 1.8rem;
    font-weight: 400;
}
  
p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight:400;
}

.btn{
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.5rem 3rem;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #088178;
    color: #fff;
}
  
a {
    text-decoration: none;
}
  
li {
    list-style: none;
}
  
  
// !  /* resuable code section  */

.heading{
    text-transform: uppercase;
    text-align: center;
    color: #415161;
    font-weight: 600;
    font-family: 'Teko', sans-serif;
    margin-bottom: 5rem;
}
  
.container {
    max-width: 120rem;
    margin: 0 auto;
}
  
.grid {
    display: grid;
    gap: 4rem;
}
  
.grid-two-column {
    grid-template-columns: repeat(2, 1fr);

}
  
.grid-three-column {
    grid-template-columns: repeat(3, 1fr);
}
  
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
  
.grid-five-column{
    grid-template-columns: repeat(5, 1fr);
}
  
.common-heading {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
}

.intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
}

.caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    border-radius: 2rem;
}

input, textarea{
    border-radius: 4px;
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}

input[type="submit"] {
    max-width: 16rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
        max-width: 130rem;
        padding: 0 3.2rem;
    }
}
  
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
        font-size: 50%;
    }
  
    .grid{
        gap: 3.2rem;
    }
    
    .grid-two-column , .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
    }
}


`;
