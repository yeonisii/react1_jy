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
  background-color: ${({ isSelected }) => (isSelected ? "#E3FDFD" : "#a6e3e9")};
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

function Month({ selectedMonth, setSelectedMonth }) {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <>
      <Monthbox>
        {months.map(() => (
          <MonthButton
            key={index}
            isSelected={selectedMonth}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </MonthButton>
        ))}
      </Monthbox>
    </>
  );
}

export default Month;
