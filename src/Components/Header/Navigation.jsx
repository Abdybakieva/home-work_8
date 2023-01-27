
import styled from "styled-components";
import { Button } from "../UI/Button/Button";

export const Navigation = ({
  loginHandler,
  timerClickHandler,
  userclickHandler,
  logoutHandler,
}) => {
  return (
    <NavigationS>
      <Button onClick={userclickHandler}>Users</Button>
      <Button onClick={timerClickHandler}>Timer</Button>
      <Button onClick={logoutHandler}>Logout</Button>
    </NavigationS>
  );
};
const NavigationS = styled.div`
  width: 30%;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
