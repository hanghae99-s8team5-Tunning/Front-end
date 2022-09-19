import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getList } from "../../../redux/modules/searchSlice";
import CollectionList from "../../common/CollectionList";
import Icon_search from "../../../shared/svg/Icon_search.svg";

const SearchWrap = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const searchList = useSelector((state) => state.searchSlice);
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getList(search))

  };

  const searchResult = searchList?.filter(
    data => data.collectionTitle.indexOf(search) !== -1
      || data.description.indexOf(search) !== -1)


  return (
    <>
      <form style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onSubmit={onSearch}>
        <StBackH1
          onClick={() => { nav(-1); }}>
          &lt;
        </StBackH1>
        <StInput onChange={onChangeHandler} name="search" type="text" />
        <StBtn type="submit"><StBtnImg src={Icon_search} /></StBtn>
      </form>
      <div>
        <h1>
          {search === "" ?
            <StText>검색어를 입력해주세요</StText>
            :
            <CollectionList state={searchResult} />
          }
        </h1>
      </div>
    </>
  );
};

export default SearchWrap;

const StBackH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 123.8%;
  margin-left: 20px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
`

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  top: 14px;
  right:35px;
  position: absolute;

`
const StBtnImg = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 12px;

`;

const StInput = styled.input`
  background: #efefef;
  border-radius: 50px;
  width: 19rem;
  height: 35px;
  border: solid #efefef;
  margin: 5px;
  margin-top: 20px;
  margin-bottom: 15px;
  position: relative;
`;

const StText = styled.p`
font-size: 1rem;
text-align: center;
`