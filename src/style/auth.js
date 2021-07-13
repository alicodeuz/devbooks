import styled from 'styled-components';

export default styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .col-left {
    width: 50%;
    height: 100%;
    background-color: #C9AC8C;
    padding: 20px;
    min-height: 100vh;
  }
  .col-right {
    width: 50%;
    height: 100%;
    background-color: #f8f8f8;
    padding: 20px;
    min-height: 100vh;
  }

  .form__input-wrapper {
    position: relative;
    padding-bottom: 30px;

    .has-error {
      position: absolute;
      bottom: 7px;
      color: red;
      font-size: 10px;
    }
    .has-error + input {
      border: 1px solid red;
      outline: none;
    }

  }
`;