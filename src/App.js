import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { Timer } from "./Components/Timer/Timer";
import { Users } from "./Components/Users/Users";

function App() {
  const [isLogget, setIsLogget] = useState(false);
  const [users, setUsers] = useState(false);
  const [timerClick, setTimerClick] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem("auth");
    setIsLogget(JSON.parse(result));
  }, []);

  const LoginHandler = (email, password) => {
    setIsLogget((prevState) => !prevState);

    localStorage.setItem("auth", JSON.stringify(true));
  };
  const logoutHandler = () => {
    setIsLogget(false);
    localStorage.removeItem("auth");
  };

  const buttonHandler = () => {
    setUsers((prevState) => !prevState);
  };

  const timerClickHandler = () => {
    setTimerClick(true);
    setUsers(false);
  };
  const userclickHandler = () => {
    setTimerClick(false);
    setUsers(true);
  };
  const loginState = !users && !timerClick && isLogget;
  const showUer = users && isLogget;
  const showTimer = timerClick && isLogget;
  return (
    <>
      <div className="App">
        <Header
          isLogget={isLogget}
          buttonHandler={buttonHandler}
          LoginHandler={LoginHandler}
          timerClickHandler={timerClickHandler}
          userclickHandler={userclickHandler}
          logoutHandler={logoutHandler}
        />

        <main>
          {!isLogget && <LoginPage LoginHandler={LoginHandler} />}
          {loginState && <Users />}
          {showUer && <Users />}
          {showTimer && <Timer />}
        </main>
      </div>
    </>
  );
}

export default App;
