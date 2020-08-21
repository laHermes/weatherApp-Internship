import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgb(0, 0, 0, 0.2);
  margin: 0 auto;
  .card-header {
    padding: 0 10px;
    height: 60px;
    background-color: rgb(245, 247, 247);
    display: flex;
    align-items: center;

    h2 {
      margin-right: 10px;
    }
  }
  .card-temp {
    line-height: 48px;
    font-size: 48px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .temp-item {
      padding: 0;
      margin: 0;
    }
    .description {
      padding: 0;
      margin: 0;
    }
    img {
      padding: 0;
      margin: 0;
    }
    .list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 15px;
      line-height: 20px;

      li {
        color: rgb(0, 0, 0, 0.4);
        font-size: 14px;
        padding: 0;
      }
    }
  }
`;

export const CardError = styled.div`
width: 90%;
height: 100px;
background-color: red;
margin: 0 auto;
border-radius: 5px;

`