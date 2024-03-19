import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllSliders } from "../redux/features/slider/sliderSlice";
import { mobile, tablet } from "../responsive";
import BannerSkeleton from "./skeleton/BannerSkeleton";

const Img = styled.img`
  width: 100%;
  height: 70vh;
  text-align: center;
  object-fit: cover;
  /* border-radius: 15px; */

  ${tablet({
    height: "40vh",
    width: "100vw",
  })}

  ${mobile({
    height: "24vh",
    borderRadius: "0px",
  })}
`;
const ImgLink = styled(Link)``;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slider() {
  const { loading, sliders } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSliders());
    // eslint-disable-next-line
  }, []);

  return (
    <Carousel responsive={responsive}>
      {loading === true ? (
        <BannerSkeleton />
      ) : (
        sliders.map((item) => (
          <ImgLink key={item.id}>
            <Img src={item?.img?.url} alt="img"></Img>
          </ImgLink>
        ))
      )}
    </Carousel>
  );
}

export default Slider;
