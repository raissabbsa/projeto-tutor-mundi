import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";

export default function Buttons({ finished, evaluation }) {
  const navigate = useNavigate();

  function sendGrade() {
    if (!finished) {
      alert("Você precisa atribuir uma avaliação");
    } else {
      const body = { star: evaluation };
      const promise = axios.post(`${BASE_URL}/stars`, body);

      promise.then(() => {
        navigate("/enviada");
      });
      promise.catch((err) => {
        console.log(err);
        alert("Não foi possível enviar sua avaliação, tente novamente!");
      });
    }
  }
  return (
    <ButtonsContainer>
      <Skip onClick={() => navigate("/finalizada")}>PULAR</Skip>
      <Continue onClick={sendGrade} finished={finished}>
        CONFIRMAR
      </Continue>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  margin-top: 150px;
  margin-bottom: 24px;
`;

const Skip = styled.button`
  height: 40px;
  border: none;
  color: #2cc6d0;
  font-size: 16px;
  margin-right: 30px;
  cursor: pointer;
  background-color: #ffffff;
`;
const Continue = styled.button`
  height: 40px;
  width: 143px;
  background-color: ${(props) => (props.finished ? "#2CC6D0" : "#c8c8c8")};
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;
