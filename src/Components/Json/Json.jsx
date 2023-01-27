
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Json=()=>{
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    useEffect(() => {
      getUsers();
    }, []);
    return (
      <ContainerJson>
        <ul>
          {users.map((user, index) => (
            <div key={index}>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.email}</li>
            </div>
          ))}
        </ul>
      </ContainerJson>
    );
}
const ContainerJson = styled.div`
  padding: 2rem 1.5rem;
  -webkit-box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  -moz-box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  width: 550px;
  margin: 10px auto;
  border-radius: 10px; ;
`;
