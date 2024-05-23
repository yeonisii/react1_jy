import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  width: 1200px;
  height: 800px;
  background-color: lightgreen;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #888;
`;

function Home() {
  return (
    <>
      <Contain>
        <Title>Home</Title>
      </Contain>
    </>
  );
}

export default Home;
