import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";

export const LoginPage = ({ LoginHandler }) => {
  const [enterdEmail, setEnterdEmail] = useState("");
  const [enteredPassword, setEnteredPassworduseState] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnterdEmail(e.target.value);
    setIsEmail(enterdEmail.includes("@"));
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassworduseState(e.target.value);
    setIsPassword(enteredPassword.trim(0).length > 6);
  };

  useEffect(() => {
    setIsFormValid(isEmail && isPassword);
  }, [isEmail, isPassword]);

  const submitHandler = (e) => {
    e.preventDefault();
    LoginHandler();
  };
  return (
    <Card>
      <form>
        <StyledInputContainer>
          <label htmlFor="">Email</label>
          <StyledInput
            type="text"
            onChange={emailChangeHandler}
            // onBlur={valideteEmailHandler}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="">Password</label>
          <StyledInput
            type="password"
            onChange={passwordChangeHandler}
            // onBlur={validetePasswordHandler}
          />
        </StyledInputContainer>
        <ButtonContainer>
          <Button
            bgColor={"success"}
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </ButtonContainer>
      </form>
    </Card>
  );
};

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 300px;
  outline: none;
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;
