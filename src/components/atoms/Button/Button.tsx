import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100%;
  background-color: var(--lightGrey);
  padding: 7px 10px;
  border-radius: 7px;
  border: unset;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: var(--darkGrey);
  }
`

export default StyledButton
