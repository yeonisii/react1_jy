import React from "react";
import styled from "styled-components";
import HomeInput from "./HomeInput";
import Month from "./Month";
import ExpenseList from "./ExpenseList";

const Contain = styled.div`
  width: 100%;
  height: 1080px;
  align-items: center;
  justify-content: center;
`;

function Home({ selectedMonth, setSelectedMonth }) {
  return (
    <>
      <Contain>
        <HomeInput />
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <ExpenseList />
      </Contain>
    </>
  );
}

export default Home;
