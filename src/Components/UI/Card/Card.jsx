import styled from "styled-components"

export const Card =({children})=>{
    return (
        <Container>{children}</Container>
    )
}

const Container = styled.div`
  padding: 2rem 1.5rem;
  -webkit-box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  -moz-box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  box-shadow: 21px 2px 54px -2px rgba(119, 121, 122, 0.2);
  width: 450px;
  margin: 10px auto;
  border-radius:10px;
`;