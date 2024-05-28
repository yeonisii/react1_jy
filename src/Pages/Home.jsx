import React, { useState } from "react";
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

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  const addExpense = (expense) => {
    setExpenses((prevExpnses) => [...prevExpnses, expense]);
  };
  return (
    <>
      <Contain>
        <HomeInput onAddExpense={addExpense} />
        <Month
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <ExpenseList expenses={expenses} />
      </Contain>
    </>
  );
}

export default Home;
