import styled from "styled-components";

const FilmOfDayStyles = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2.5rem 6rem;
background-color: black;
& .categoryList {
    width: 100%;
    max-width: 1600px;
    background: rgb(0, 0, 0);
    margin-top: 8rem;
    overflow: hidden;
  }
& .newReleaseInfo {
    width: 65rem;
    position: absolute;
    left: 6rem;
    bottom: 8%;
  }
& h3 {
    font-family: "Bebas Neue", cursive;
    font-size: 4rem;
    color: #fff;
}
& #motd .overlay {
    position: unset;
  }
& #motd .newReleaseInfo{
    position: unset;
    float: right;
    padding: 25px
  }
& p {
    color: white;
    font-size: 2rem;
    font-weight: 900;
    font-family: "Martel Sans", sans-serif;
}
  @media (max-width: 767px) {
    display: none;
}`;
export default FilmOfDayStyles;






 