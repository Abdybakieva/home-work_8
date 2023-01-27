import styled from "styled-components";
import { Navigation } from "./Navigation";

export const Header = ({
  isLogget,
  buttonHandler,
  timerClickHandler,
  userclickHandler,
  logoutHandler,
}) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {isLogget ? (
        <Navigation
          isLogget={isLogget}
          buttonHandler={buttonHandler}
          timerClickHandler={timerClickHandler}
          userclickHandler={userclickHandler}
          logoutHandler={logoutHandler}
        />
      ) : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #700170;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
`;
