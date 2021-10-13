import styled from "styled-components";

const Container = styled.div`
  font-family: Roboto, Arial, sans-serif;

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #B8B8D4;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }

  label {
    display: block; 
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #FFFFFF;
      outline: 0;
      font-size: 15px;
      background-color: #02044A;
    }
  }

  button {
      background-color: #25CD89;
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      padding: 20px 40px;
      border: 0;
      border-radius: 30px;
      cursor: pointer;
      margin-top: 30px;
    }
`

export {
  Container
}