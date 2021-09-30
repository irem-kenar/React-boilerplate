import styled from 'styled-components';

const Button = styled.button`
  width: 25%;
  min-width: 200px;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #7d0d0d;
  border-radius: 6px;
  color: white;
  background: #7d0d0d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin-top: 20px;

  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #b92525;
    border-color: #b92525;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
