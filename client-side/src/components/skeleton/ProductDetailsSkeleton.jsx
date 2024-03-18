import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { mobile } from "../../responsive";

const ProductDetailsSkeleton = () => {
  return (
    <>
      <Wrapper>
        <section className="topSection1">
          <div className="imageDiv1">
            <div className="img"></div>
          </div>
          <div className="infoDiv">
            <p className="name"></p>
            <p className="availabilty"></p>
            <p className="availabilty1"></p>
            <p className="availabilty2"></p>
          </div>
        </section>
        <section className="midSection1">
          <div className="descDiv">
            <p className="desc"></p>
            <p className="desc"></p>
            <p className="desc"></p>
            <p className="desc"></p>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${mobile({
    margin: "20px 10px",
  })}
  .topSection1 {
    display: flex;
    margin: 30px 100px;
    background-color: #fff;
    ${mobile({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0",
    })}
  }
  .topSection1 > .imageDiv1 {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    ${mobile({
      alignItems: "center",
      justifyContent: "center",
      margin: "0",
    })}
  }

  .topSection1 > .imageDiv1 > .img {
    width: 80%;
    height: 400px;
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
    ${mobile({
      width: "80vw",
      height: "300px",
      textAlign: "center",
    })}
  }

  .topSection1 .infoDiv {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    padding: 50px;

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
      gap: "10px",
      padding: "20px 0",
    })}
  }
  .topSection1 > .infoDiv > .name {
    width: 350px;
    height: 20px;
    background-color: #d1d5db;
    border-radius: 9999px;
    ${mobile({
      width: "250px",
    })}
  }

  .topSection1 > .infoDiv > .availabilty {
    width: 300px;
    height: 20px;
    background-color: #d1d5db;
    border-radius: 9999px;
    ${mobile({
      width: "200px",
    })}
  }
  .topSection1 > .infoDiv > .availabilty1 {
    width: 250px;
    height: 20px;
    background-color: #d1d5db;
    border-radius: 9999px;
    ${mobile({
      width: "170px",
    })}
  }
  .topSection1 > .infoDiv > .availabilty2 {
    width: 200px;
    height: 20px;
    background-color: #d1d5db;
    border-radius: 9999px;
  }

  .midSection1 {
    margin: 20px 100px;
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
      margin: "10px 0",
      padding: "5px 20px",
    })}
  }
  .midSection1 > .descDiv {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    ${mobile({
      margin: "10px",
    })}
  }

  .midSection1 > .descDiv > .desc {
    width: 70vw;
    height: 20px;
    background-color: #d1d5db;
    border-radius: 9999px;
  }
`;
export default ProductDetailsSkeleton;
