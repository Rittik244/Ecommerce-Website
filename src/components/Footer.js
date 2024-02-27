import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegCopyright,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="footer">
          <figure className="col img-container">
            <h4>Dream Designers</h4>
            <Link to="/">
              <img src="./images/logo.png" alt="logo" />
            </Link>
          </figure>
          <div className="col col1">
            <h4>Contact</h4>
            <p>
              <strong>Address : </strong>
              <a
                href="https://maps.app.goo.gl/XBH6HcCjrRwnW2sM9"
                target="_blank"
              >
                OGI Boys Hostel, Bhopal - 462022
              </a>
            </p>
            <p>
              <strong>Email : </strong>
              <a href="mailto:ritik.raghuwanshi244@gmail.com" target="_blank">
                ritik.raghuwanshi244@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone : </strong>
              <a href="tel:9691244843" target="_blank">
                +91 9691244843
              </a>
            </p>
            {/* <p><strong>Hours : </strong>10:00 am - 09:00 pm, Mon - Sat</p> */}
            <div className="social">
              <h4>Social Media</h4>
              <div className="social-icons">
                <Link to="#">
                  <FaInstagram className="icons" />
                </Link>
                <Link to="#">
                  <FaWhatsapp className="icons" />
                </Link>
                <Link to="#">
                  <FaFacebook className="icons" />
                </Link>
                <Link to="#">
                  <FaYoutube className="icons" />
                </Link>
                <Link to="#">
                  <FaPinterest className="icons" />
                </Link>
                <Link to="#">
                  <FaTwitter className="icons" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col col2">
            <h4>About</h4>
            <p>
              <Link to="/about">About Us</Link>
            </p>
            <p>
              <Link to="#">Delivery Information</Link>
            </p>
            <p>
              <Link to="#">Privacy Policy</Link>
            </p>
            <p>
              <Link to="#">Terms & Conditions</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div className="col col3">
            <h4>My Account</h4>
            <p>
              <Link to="#">Sign In</Link>
            </p>
            <p>
              <Link to="#">View Cart</Link>
            </p>
            <p>
              <Link to="#">Wishlist</Link>
            </p>
            <p>
              <Link to="#">Track Order</Link>
            </p>
            <p>
              <Link to="#">Help</Link>
            </p>
          </div>
          <div className="col col4">
            <h4>Install App</h4>
            <p>Apple store & Google play store</p>
            <div className="store-img">
              <img src="./images/app.jpg" alt="apple store img" />
              <img src="./images/play.jpg" alt="google store img" />
            </div>
            <p>Secure payment gateway</p>
            <img src="./images/pay.png" alt="payment gateway img" />
          </div>
          <div className="copyright">
            <p>
              <FaRegCopyright className="cr-icon" /> 2024, All Rights Reserved
              to Dream Designers
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 5rem 0;

  .img-container {
    width: 100px;
    height: 100px;

    h4 {
      font-size: 2rem !important;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;

      h4 {
        font-size: 14px;
        margin-bottom: 20px;
      }

      p {
        color: #415161;
        font-size: 13px;
        margin-bottom: 8px;

        a {
          color: #415161;

          &:hover {
            color: #ee4b2b;
          }

          &:active {
            color: brown;
          }
        }
      }

      .social {
        margin-top: 20px;

        .social-icons {
          display: flex;
          gap: 1rem;

          .icons {
            color: #415161;
            width: 20px;
            height: 20px;

            &:hover {
              color: #ee4b2b;
            }
          }
        }
      }

      .store-img {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 10px;

        img {
          border: 1px solid lightgray;
          /* cursor: pointer; */
          border-radius: 4px;
        }
      }
    }

    .copyright {
      width: 100%;
      text-align: center;
      vertical-align: middle;

      p {
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;

        .cr-icon {
          margin-right: 3px;
          width: 13px;
          height: 13px;
        }
      }
    }
  }
`;

export default Footer;
