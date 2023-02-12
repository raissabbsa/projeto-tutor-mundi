import styled from "styled-components";
import fullStar from "../images/estrela_cheia.svg";
import emptyStar from "../images/estrela_vazia.svg";

export default function Stars({ star, setStars, index }) {
  function fillStars() {
    const newArrangement = [];
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        newArrangement.push(true);
      } else {
        newArrangement.push(false);
      }
    }
    setStars(newArrangement);
  }

  return (
    <Star>
      <img
        src={star == true ? fullStar : emptyStar}
        alt="estrela"
        onClick={fillStars}
      />
    </Star>
  );
}

const Star = styled.div`
  margin-right: 12px;
  cursor: pointer;
`;
