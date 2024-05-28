import React from "react";
import styled from "styled-components";

const Monthbox = styled.div`
  width: 1050px;
  height: 250px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 15px;
`;

const MonthButton = styled.button`
  width: 104px;
  height: 60px;
  border-radius: 8px;
  background-color: #a6e3e9;
  border: none;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2.8rem;
  margin-left: 3.8rem;
  box-sizing: border-box;
  cursor: pointer;
`;

function Month() {
  return (
    <>
      <Monthbox>
        <MonthButton>1월</MonthButton>
        <MonthButton>2월</MonthButton>
        <MonthButton>3월</MonthButton>
        <MonthButton>4월</MonthButton>
        <MonthButton>5월</MonthButton>
        <MonthButton>6월</MonthButton>
        <MonthButton>7월</MonthButton>
        <MonthButton>8월</MonthButton>
        <MonthButton>9월</MonthButton>
        <MonthButton>10월</MonthButton>
        <MonthButton>11월</MonthButton>
        <MonthButton>12월</MonthButton>
      </Monthbox>
    </>
  );
}

export default Month;
