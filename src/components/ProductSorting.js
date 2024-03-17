import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";
import { BsGridFill, BsList } from "react-icons/bs";

const ProductSorting = () => {
  const { grid_view, setGridView, setListView, filter_products, Sorting } =
    useFilterContext();

  return (
    <Wrapper>
      <div className="list-grid-container">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={Sorting}
          >
            <option> Default </option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  .list-grid-container {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }

    .active {
      color: #fff;
      background-color: #212529;
    }
  }

  .product-data p {
    color: #088178;
  }

  .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    /* outline: none; */

    option {
      cursor: pointer;
      height: 2rem;
    }
  }


  @media (max-width: ${({ theme }) => theme.media.small_devices}) {
    .product-data{
      display: none;
    }
  }
`;

export default ProductSorting;
