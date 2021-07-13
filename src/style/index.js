import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .d-flex {
    display: flex;
  }
  .text-center {
    align-items: center;
  }
  .text-right {
    align-items: right;
  }
  .text-left {
    align-items: left;
  }
  .align-center {
    align-items: center;
  }
  .align-end {
    align-items: flex-end;
  }
  .align-start {
    align-items: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }

`