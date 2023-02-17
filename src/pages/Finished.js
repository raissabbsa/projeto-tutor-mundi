import styled from "styled-components";

export default function Send() {
  return (
    <Body>
      <h1>
        Sua avaliação é importante para nós. Considere avaliar sua próxima
        tutoria!
      </h1>
    </Body>
  );
}
const Body = styled.div`
  background-color: #5a5eda;
  width: 100%;
  height: 800px;
  padding-top: 150px;
  h1 {
    width: 600px;
    margin: 0 auto 0;
    font-weight: bold;
    font-size: 37px;
    color: #ffffff;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 30px;
      width: 400px;
    }
  }
`;
