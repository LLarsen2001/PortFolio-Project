import styled from "styled-components";

import { COLORS } from "./Style";

// styled.element``
const ButtonContainer = styled.button`
  border: 1px solid ${COLORS.BLACK};
  border-radius: 8px;
  color: ${COLORS.BLACK};
  background: ${COLORS.WHITE};
  padding: 0 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    background: ${COLORS.BLACK};
  }
`
const Button = (props) => {
  console.log("props: ", props)
  return (
    <ButtonContainer type={props.type ? props.type : "button"}
      onClick={Object.keys(props).includes('onClick') ? () => props.onClick() : () => null} >
      {props.children}
    </ButtonContainer >


  )
}

export default Button;