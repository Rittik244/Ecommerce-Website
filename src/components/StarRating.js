
import styled from "styled-components";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const StarRating = ({stars, reviews}) => {

  const ratingStar = Array.from({length: 5}, (ele, index) => {
    let num = index + 0.5;

    return (
      <span key={index}>
        {
          stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= num ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon empty-icon" />
          )
        }

      </span>
    )
  })

  return (
    <Wrapper>
      <div className="icon-style">
        <div className="icon-stars">
          {ratingStar}
        </div>
        <p>({reviews} Customer Reviews)</p>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .icon-style{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* padding-left: .2rem; */
    
    .icon-stars{
      display: flex;
      gap: 0.2rem;
    }

    .icon{
      font-size: 2rem;
      color: orange;
    }

    .empty-icon{
      font-size: 2.3rem;
    }

    p{
      margin: 0;
      /* padding-left: 3rem; */
    }
  }
`;

export default StarRating;
