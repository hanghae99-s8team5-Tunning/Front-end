import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormInput = ({ onChange, collectionTitle }) => {
  return (
    <Wrap>
      <Label>제목</Label>
      <Input
        placeholder="컬랙션 제목을 입력하세요"
        name="collectionTitle"
        onChange={onChange}
        value={collectionTitle}
      />
    </Wrap>
  );
};
export default FormInput;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items
  width: 23.438rem;
  height: 6rem;
  margin:1.25rem 0 1.25rem 0

`;
const Label = styled.label`
  display: flex;
  align-items: center;
  height: 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: left;
`;

const Input = styled.input`
  width: 20.938rem;
  height: 3rem;
  margin: 0.125rem 0 0;
  border-radius: 8px;
  border: solid 1px #eee;
  background-color: #fff;
  font-size: 1.125rem;
`;
