import styled from "styled-components";
import { useToggle } from "../../hooks";
import Button from "../../styledComponents/Button";
const Card = (props) => {
    const { isToggled: show, toggle } = useToggle(true);
    return (
        <CardContainer>
            <CardHeaderContainer>
                <h3>{props.title}</h3>
                <Button onClick={toggle}>{show ? 'hide' : 'show'}</Button>
            </CardHeaderContainer>
            {show && <CardBody>{props.body}</CardBody>}
        </CardContainer>
    );
};

const CardContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 20px;
  padding: 10px 20px;
`;

const CardHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding:10px;
`;

const CardBody = styled.div`
    padding:10px;
`;

export default Card;
