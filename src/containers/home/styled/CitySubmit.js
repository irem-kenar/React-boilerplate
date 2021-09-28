import styled from "styled-components";

const CitySubmit = styled.div`
padding-top: 17rem;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column nowrap;

& div {
  display: ${props => props.visible ? 'none' : ''}
}

& input {
  width: 30%;
  min-width: 200px;
  border: 2px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#d4a7a7' : '#ff9500'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  border-radius: 4px;
  color: white;
}



& input:focus {
  outline: none;
  background: #e2913c;
  border-color: #a76a69;
}
`;

export default CitySubmit;