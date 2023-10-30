import styled from "styled-components";
import { mobile } from "../../responsive";

const ProductCardSkeleton = () => {
  return (
    <Container>
      <CardWrapper>
        <div className="link">
          <div className="imageDiv"></div>
          <div className="textDiv"></div>
        </div>
      </CardWrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  .link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #3bb77d31;
  height: 280px;
  width: 220px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
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
    height: "210px",
    width: "160px",
    borderRadius: "5px",
  })}

  .imageDiv {
    height: 200px;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d1d5db;
    border-radius: 10px;
    ${mobile({
      height: "160px",
      width: "130px",
    })}
  }

  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 20px;
    border-radius: 9999px;
    background-color: #d1d5db;
    ${mobile({
      width: "120px",
    })}
  }
`;

export default ProductCardSkeleton;
