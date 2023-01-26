import styled from "styled-components";

const NavBarStyles = styled.div`
  background-color: #27323f;
  height: 80px;
  width: 100%;
  box-shadow: 1px 1px 3px #373535;
   & h1 {
   font-size: 30px;
    color: white;
    margin-left: 15%;
    margin-top: -50px;
    text-shadow: 2px 2px 3px #000);
    cursor: default;
  }

  & ul {
    list-style: none;
    display: flex;
    margin-left: 66%;
    margin-top: -4%;
  }
  & a {
    font-size: 24px;
    color: white;
    text-decoration: none;
    padding: 15px;
    text-align: right;
  }
  img {
    height: 62px;
    width: 62px;
    margin-top: 7px;
    margin-left: 9%;
    cursor: pointer;
  }
`;
export default NavBarStyles;
