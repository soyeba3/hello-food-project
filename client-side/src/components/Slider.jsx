import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getAllSliders } from "../redux/features/slider/sliderSlice";
import { mobile, tablet } from "../responsive";
import BannerSkeleton from "./skeleton/BannerSkeleton";

const Wrapper = styled.div`
  .swiperStyle {
    text-align: center;
  }

  .mySwiper {
    /* margin: 20px 0px; */

    ${tablet({
      margin: 0,
    })}

    ${mobile({
      margin: 0,
    })}
  }

  .swiper-pagination-bullet-active {
    background-color: #cbcbcb83;
  }
`;

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

const Slider = () => {
  const { loading, sliders } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSliders());
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          //dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {loading === true ? (
          <BannerSkeleton />
        ) : (
          sliders.map((item) => (
            <SwiperSlide className="swiperStyle" key={item._id}>
              <ImgLink>
                <Img src={item?.img?.url} alt="img"></Img>
              </ImgLink>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Wrapper>
  );
};

export default Slider;
