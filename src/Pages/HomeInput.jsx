import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
  width: 1050px;
  height: 90px;
  background-color: #fff;
  border-radius: 15px;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Save = styled.button`
  border: none;
  width: 45px;
  height: 30px;
  border-radius: 5px;
  background-color: #7ab2b2;
  margin-left: 0.5rem;
`;

function HomeInput() {
  // 유효성 검사
  const save = () => {
    if (!date || !item || !amount || !content) {
      alert("각각 항목을 입력해주세요");
      return;
    }
  };

  return (
    <>
      <InputBox>
        날짜
        <input
          type="text"
          placeholder="xxxx-yy-dd"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        항목
        <input
          type="text"
          placeholder="지출 항목"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        금액
        <input
          type="number"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        내용
        <input
          type="text"
          placeholder="지출 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Save onClick={save}>저장</Save>
      </InputBox>
    </>
  );
}
export default HomeInput;
