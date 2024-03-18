import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import ProductCardSkeleton from "../components/skeleton/ProductCardSkeleton";
import { getSingleCategory } from "../redux/features/category/categorySlice";
import { mobile } from "../responsive";

const Prodcuts = () => {
  const { categoryUrl } = useParams();
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state) => state.category);
  const products = category?.products;

  useEffect(() => {
    dispatch(getSingleCategory(categoryUrl));
    // eslint-disable-next-line
  }, [categoryUrl]);

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(products?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products?.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemOffset]);

  return (
    <div style={{ backgroundColor: "#fcf8f8" }}>
      <Navbar />
      <Categories />
      <Container>
        <div className="wrapper">
          <div className="header">
            <div className="name">
              <span>{category?.name}</span>
            </div>
          </div>
          <div className="productsList">
            {loading === true
              ? Array(5)
                  .fill()
                  .map((item) => <ProductCardSkeleton />)
              : currentItems?.map((item) => {
                  return <ProductCard item={item} key={item._id} />;
                })}
          </div>
          <div>
            <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="Prev"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </Container>
      <Footer />
      <MobileMenu />
      {loading && <Spinner />}
    </div>
  );
};

const Container = styled.div`
  min-height: 70vh;
  .wrapper {
    margin: 50px 50px;
    ${mobile({
      margin: 0,
    })}
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 50px;
    padding: 20px;
    /* border-bottom: 1px solid lightgray; */
    ${mobile({
      margin: "10px 10px",
      padding: "6px",
    })}
  }
  .name > span {
    font-size: 24px;
    font-weight: 600;
    /* border-bottom: 2px solid green; */
    ${mobile({
      fontSize: "18px",
    })}
  }
  .sort > span {
    font-size: 14px;
    margin-right: 6px;
  }
  .sort select {
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    ${mobile({
      fontSize: "10px",
      padding: "3px",
    })}
  }
  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 10px;

    ${mobile({
      gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))",
      margin: "4%",
    })}
  }
  .pagination {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    margin: 40px;
    gap: 15px;
    ${mobile({
      margin: "20px 10px",
      gap: "5px",
    })}
  }

  .page-item {
    cursor: pointer;
    border: 1px solid lightgray;
    padding: 5px 10px;
    border-radius: 2px;
  }
  .active {
    background-color: green;
    color: white;
  }
`;
export default Prodcuts;
