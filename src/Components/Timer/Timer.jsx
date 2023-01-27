import { useEffect, useRef, useState } from "react";
import { Card } from "../UI/Card/Card";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  const [timerId, setTimerId] = useState();

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setTimerId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  // useEffect(() => {
  let timeOutId = setTimeout(() => {
    clearInterval(timerId);
  }, 60000);

  //   return () => {
  //     clearTimeout(timeOutId);
  //   };
  // }, []);

  return (
    <Card>
      <h1>Timer:{timer}</h1>
    </Card>
  );
};
