import styled from "styled-components";

const HeroBannerStyles = styled.div`
  width: 100%;
  height: 350px;
  box-shadow: 1px 1px 3px #373535;
  & h1 {
    width: 40%;
    color: white;
    font-size: 70px;
    margin-top: -430px;
    margin-left: 50%;
    text-align: center;
    text-shadow: 1px 1px 2px #373535;
  }
  & p {
    width: 35%;
    color: #566371;
    font-size: 20px;
    margin-left: 53%;
    text-align: center;
  }

  & img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    margin-top: 15%;
    height: 150px;
    width: 100%;
    & h1 {
      font-size: 24px;
      margin-top: -120px;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export default HeroBannerStyles;
