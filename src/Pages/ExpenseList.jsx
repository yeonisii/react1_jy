import React from "react";
import styled from "styled-components";

const DivBox = styled.div`
  width: 1050px;
  height: 850px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 0;
  border-radius: 15px;
`;

function ExpenseList() {
  return <DivBox></DivBox>;
}

export default ExpenseList;
