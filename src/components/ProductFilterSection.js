import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { FaCheck, FaTimes } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";

const ProductFilterSection = () => {
  const {
    filters: { text, category, colors, price, maxPrice, minPrice, company },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // for unique data from api
  const getUniqueData = (data, property) => {
    let newValue = data.map((ele) => {
      return ele[property];
    });

    if (property === "colors") {
      // return ["all", ...new Set([].concat(...newValue))]
      newValue = newValue.flat();
    }

    return ["all", ...new Set(newValue)];
  };

  // For Clearing text inside search bar
  const handleClearText = () => {
    updateFilterValue({ target: { name: "text", value: "" } });
  };

  const diffCategoryData = getUniqueData(all_products, "category");
  const diffCompanyData = getUniqueData(all_products, "company");
  const diffColorData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
            // autoComplete="off"
          />
          {text && (
            <button className="clear-text-btn" onClick={handleClearText}>
              <FaTimes className="clear-text-icon" />
            </button>
          )}
        </form>
      </div>

      <div className="filter-category">
        <p>category</p>
        <div>
          {diffCategoryData.map((ele, index) => {
            return (
              <button
                key={index}
                name="category"
                type="category"
                value={ele}
                className={ele === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <p>company</p>
        <form action="#">
          <label htmlFor="company"></label>
          <select
            name="company"
            id="company"
            type="company"
            onChange={updateFilterValue}
            value={company}
          >
            {diffCompanyData.map((ele, index) => {
              return (
                <option key={index} name="company" value={ele}>
                  {ele}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-color">
        <p>colors</p>
        <div>
          {diffColorData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  name="colors"
                  type="colors"
                  value={curColor}
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            }

            return (
              <button
                key={index}
                name="colors"
                type="colors"
                value={curColor}
                style={{ backgroundColor: curColor }}
                className={colors === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {colors === curColor ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price">
        <p>price</p>

        <p className="price">
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="clear-filter">
        <button className="btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-transform: capitalize;

  p {
    padding: 1.5rem 0;
    font-weight: bold;
  }

  .filter-search {
    position: relative;
    input {
      padding: 0.6rem 1rem;
      width: 100%;
      text-transform: none;

      &::placeholder {
        letter-spacing: 1px;
        text-transform: capitalize;
      }
    }
    .clear-text-btn {
      position: absolute;
      top: 28%;
      right: 3%;
      outline: none;
      border: none;
      cursor: pointer;
      background-color: transparent;

      .clear-text-icon {
        color: gray;

        &:hover,
        &:active {
          color: #d22b2b;
        }
      }
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      button {
        font-size: 1.4rem;
        text-transform: capitalize;
        background: none;
        border: none;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
      .active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }

  .filter-company {
    select {
      font-size: 1.3rem;
      padding: 0.3rem 1.2rem;
      cursor: pointer;
      border-radius: 4px;
      text-transform: capitalize;

      option {
        cursor: pointer;
      }
    }
  }

  .filter-color {
    div {
      display: flex;
      justify-content: flex-start;

      .btnStyle {
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        border: none;
        outline: none;
        opacity: 0.5;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }

      .color-all--style {
        font-size: 1.4rem;
        background-color: transparent;
        text-transform: capitalize;
        border: none;
        cursor: pointer;
      }

      .active {
        opacity: 1;
      }

      .checkStyle {
        font-size: 1.4rem;
        color: #fff;
      }
    }
  }

  .filter-price {
    .price {
      padding: 0;
      font-size: 1.4rem;
      font-weight: 500;
    }

    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .clear-filter {
    button {
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 1px;
      padding: 1.2rem 2.5rem;

      &:hover {
        background-color: #046c64;
      }

      &:active {
        background-color: #088178;
      }
    }
  }
`;

export default ProductFilterSection;
