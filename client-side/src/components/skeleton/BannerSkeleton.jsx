import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

const Img = styled.img`
  width: 100vw;
  height: 70vh;
  text-align: center;
  object-fit: cover;
  background-color: #d1d5db;

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

  ${tablet({
    height: "40vh",
    width: "100vw",
  })}

  ${mobile({
    height: "24vh",
    borderRadius: "0px",
  })}
`;

function BannerSkeleton() {
  return <Img></Img>;
}

export default BannerSkeleton;
