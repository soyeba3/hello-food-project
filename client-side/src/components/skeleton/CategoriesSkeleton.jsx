import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 160px;
  width: 140px;
  background-color: white;
  flex-basis: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 15px #aca7a715;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  ${mobile({
    height: "80px",
    flexBasis: "0",
    flex: 1,
  })}
`;
const ImageDiv = styled.div`
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1d5db;
  border-radius: 10px;
  ${mobile({
    height: "45px",
    width: "",
  })}
`;
const TextDiv = styled.div`
  height: 18px;
  width: 80px;
  text-align: center;
  background-color: #d1d5db;
  border-radius: 10px;
  ${mobile({
    height: "20px",
    width: "100%",
  })}
`;

const CategoriesSkeleton = () => {
  return (
    <Card>
      <ImageDiv></ImageDiv>
      <TextDiv></TextDiv>
    </Card>
  );
};

export default CategoriesSkeleton;
