import styled from "styled-components";

export const Search = styled.div`
  width: 400px;
  height: 30px;
  line-height: 30px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  
  input {
    border-radius: 5px;
    width: 100%;
    padding: 0 35px;
    height: 28px;
    border: none;
    outline: none;
    font-size: 1rem;
  }

  .icon{
    position: absolute;
    left: 12px;
    color: black;
  }
`;
