import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StDiv>
      <StButton
        onClick={() => {
          navigate("/lists");
        }}
      >
        TodoList로 이동
      </StButton>
    </StDiv>
  );
};

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const StButton = styled.button`
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid black;
  cursor: pointer;
`;

export default Home;
