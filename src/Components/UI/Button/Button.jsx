import styled from "styled-components";

export const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  padding: 10px 25px;
  background-color: ${(props) =>
    props.bgColor ? "#50016F" : "rgb(221,14,176)"};
  border: none;
  border-radius: 16px;
  color: white;
  :disabled {
    background-color: gray;
  }
`;
