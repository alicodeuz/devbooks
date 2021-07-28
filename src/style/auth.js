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

  .password-visible {
    position: absolute;
    right: 5px;
    border: none;
    background: transparent;
    top: 23px;
    transform: translateY(-50%);
    font-size: 24px;
    cursor: pointer;
  }
`;