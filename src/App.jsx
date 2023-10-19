import styled from "styled-components";
import GlobalStyled from "./styles/GlobalStyles";

const TestStyledCom = styled.div`
  background-color: var(--color-yellow-100);
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <TestStyledCom>Hello</TestStyledCom>
    </>
  );
}

export default App;
