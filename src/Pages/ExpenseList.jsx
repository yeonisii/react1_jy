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

const ExpenseItem = styled.div`
  width: 100%;
  height: 25px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
`;

function ExpenseList({ expenses }) {
  return (
    <DivBox>
      {expenses.length === 0 ? (
        <p>지출 내역이 없습니다</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id}>
            <span>{expense.date}</span>
            <span>{expense.item}</span>
            <span>{expense.amount}</span>
            <span>{expense.content}</span>
          </ExpenseItem>
        ))
      )}
    </DivBox>
  );
}

export default ExpenseList;
