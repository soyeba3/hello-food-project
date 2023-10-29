import styled from "styled-components";
import { mobile } from "../../responsive";

const ProductCardSkeleton = () => {
  return (
    <Container>
      <CardWrapper>
        <div className="link">
          <div className="imageDiv"></div>
          <div className="textDiv">
            <span className="title"></span>
          </div>
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
  margin-bottom: 13px;
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
    height: "248px",
    width: "160px",
    borderRadius: "5px",
    marginBottom: "0",
  })}

  .title {
    font-size: 13px;
    font-weight: bold;
    color: #253d4e;

    ${mobile({
      fontSize: "11px",
      fontWeight: 600,
    })}
  }

  .imageDiv {
    height: 200px;
    width: 190px;
    display: flex;
    align-items: center;
    background-color: #d1d5db;
    border-radius: 10px;
    ${mobile({
      height: "160px",
    })}
  }

  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 20px;
    margin: 0 20px;
    margin-top: 20px;
    border-radius: 9999px;
    background-color: #d1d5db;
    /* border: 1px solid blue; */
    ${mobile({
      margin: "10px 10px 0 10px",
    })}
  }

  .priceAndButton {
    display: flex;
    width: 100%;
    margin: 10px 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    ${mobile({
      margin: "10px",
    })}
  }
  .priceDiv {
    display: flex;
    flex-direction: column;
  }

  .priceDiv > .product-price {
    font-size: 16px;
    font-weight: bold;
    color: #3bb77e;
    ${mobile({
      fontSize: "11px",
    })}
  }

  .priceAndButton button {
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 14px;
    color: #3bb77e;
    background-color: #a1f6ce6c;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;

    ${mobile({
      fontSize: "11px",
    })}
  }
`;

export default ProductCardSkeleton;
