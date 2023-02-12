import book from "../images/livro.png";
import styled from "styled-components";
import { useState } from "react";
import Stars from "../components/Stars";
import Buttons from "../components/Buttons";

export default function MainPage() {
  const [stars, setStars] = useState([false, false, false, false, false]);
  return (
    <Body>
      <img src={book} alt="livro" />
      <h1>Como foi a ajuda do tutor?</h1>
      <StarsContainer>
        {stars.map((star, index) => (
          <Stars key={index} star={star} setStars={setStars} index={index} />
        ))}
      </StarsContainer>
      <Buttons />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    margin-top: 140px;
    width: 90px;
  }
  h1 {
    width: 350px;
    margin-top: 46px;
    font-weight: bold;
    font-size: 42px;
    text-align: center;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;
