import styled from 'styled-components';
import colors from './colors';

const { borderColor, darkBlue, main } = colors;

const buttonProps = {
  fontSize: {
    md: '16px',
    lg: '24px',
    sm: '12px',
  },
  padding: {
    md: '8px 16px',
    lg: '12px 20px',
    sm: '4px 8px',
  },
}

const StyledButton = styled.button.attrs(props => ({
  shape: props.shape || '',
  size: props.size || 'md'
}))`
  font-size: ${props => props.size ? buttonProps.fontSize[props.size] : buttonProps.fontSize.md};
  padding: ${props => props.size ? buttonProps.padding[props.size] : buttonProps.padding.md};
  border-radius: ${props => props.shape === 'rounded' ? '100px' : "4px"};
  border: 1px solid ${borderColor};

  &.active, &:hover, &.main {
    background-color: ${darkBlue};
    color: #fff;
    border-color: ${darkBlue};
  }
`;

const StyledInput = styled.input`
  background: #FFFFFF;
  border: 1px solid ${borderColor};
  box-sizing: border-box;
  border-radius: 10px;
  height: 46px;
  min-width: 300px;
`;

export { StyledButton, StyledInput };