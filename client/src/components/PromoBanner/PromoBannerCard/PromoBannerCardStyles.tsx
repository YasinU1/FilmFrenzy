import styled from "styled-components";
interface PromoBannerStylesProps {
  smallCard?: boolean;
}
export const PromoBannerCardStyles = styled.div<PromoBannerStylesProps>`
  box-sizing: border-box;
  border-radius: 25px;
  color: white;
  box-shadow: 5px 5px 20px -7px rgba(0, 0, 0, 0.65);

  width: ${(props) => (props.smallCard ? "500px" : "450px")};
  height: ${(props) => (props.smallCard ? "290px" : "600px")};
  & img {
    width: ${(props) => (props.smallCard ? "500px" : "450px")};
    height: ${(props) => (props.smallCard ? "290px" : "600px")};
    border-radius: 10px;
  }
  & h1 {
    width: ${(props) => (props.smallCard ? "50%" : "100%")};
    text-align: ${(props) => (props.smallCard ? "" : "center")};
    font-size: ${(props) => (props.smallCard ? "32px" : "45px")};
    transform: translateY(${(props) => (props.smallCard ? "-250px" : "-260px")})
      translateX(${(props) => (props.smallCard ? "10%" : "1%")});
  }
  & p {
    width: ${(props) => (props.smallCard ? "46%" : "70%")};
    text-align: ${(props) => (props.smallCard ? "" : "center")};
    transform: translateY(${(props) => (props.smallCard ? "-260px" : "-260px")})
      translateX(${(props) => (props.smallCard ? "10%" : "23%")});
    font-size: ${(props) => (props.smallCard ? "19px" : "22px")};
  }
`;
