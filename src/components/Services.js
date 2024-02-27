import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading">Our Services</h2>
        <div className="grid grid-three-column">
          <div className="services service-1">
            <FaShippingFast className="service-icons" />
            <span>Fast & Reliable Delivery</span>
          </div>
          <div className="services service-2">
            <div className="sub-box upper-box">
              <MdOutlineSecurity className="service-icons" />
              <span>Non-Contact Shipping</span>
            </div>
            <div className="sub-box lower-box">
              <GiReceiveMoney className="service-icons" />
              <span>Fast & Easy Return</span>
            </div>
          </div>
          <div className="services service-3">
            <RiSecurePaymentLine className="service-icons" />
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem;

  .grid {
    gap: 4.8rem;
    /* place-items: center; */

    .services {
      width: auto;
      background-color: #f0f8ff;
      /* background-color: #b3cee5; */
      /* width: 300px; */
      height: 200px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 8px;

      span {
        font-size: 1.5rem;
        color: #415161;
        padding: 20px;
      }

      .sub-box {
        background-color: #f0f8ff;
        /* background-color: #b3cee5; */
        width: 100%;
        height: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .service-icons {
        color: #005a9c;
        width: 30px;
        height: 30px;
      }
    }

    .service-2 {
      gap: 2rem;
      background-color: white;
    }
  }
`;

export default Services;
