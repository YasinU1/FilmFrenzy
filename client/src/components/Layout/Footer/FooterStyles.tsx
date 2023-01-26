import styled from "styled-components";

const FooterStyles = styled.div`
  background-color: #27323f;
  color: white;
  height: 200px;
  display: flex;
  justify-content: center;

  & ul {
    list-style: none;
    display: flex;
    align-self: flex-end;
    padding: 0;
    flex-grow: 0.5;
    justify-content: space-around;
    cursor: pointer;
  }
  & a {
    font-size: 26px;
    color: white;
    text-decoration: none;
    padding: 15px;
    bottom: 0;
  }

  & .footer-logo {
    height: 75px;
    width: 75px;
    margin-left: -5%;
    padding-bottom: 2rem;
    cursor: pointer;
    padding: 20px 0 0 45%;
  }
  @media (max-width: 767px) {
    height: 170px;
    margin-top: 1rem;
    & a {
      font-size: 16px;
      padding: 5px;
      bottom: 0;
    }
    & li {
      white-space: pre-line;
      margin-bottom: 15px;
    }
    & ul {
      flex-grow: 1;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 0 10px;
    }
    & .footer-logo {
      margin-left: -12%;
      padding-bottom: 1rem;
    }
  }
`;
export default FooterStyles;
