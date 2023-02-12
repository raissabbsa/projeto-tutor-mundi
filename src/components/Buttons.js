import styled from "styled-components";

export default function Buttons() {
  function sendGrade() {}
  return (
    <ButtonsContainer>
      <Skip>PULAR</Skip>
      <Continue onClick={sendGrade}>CONFIRMAR</Continue>
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
  background-color: #c8c8c8;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
`;
