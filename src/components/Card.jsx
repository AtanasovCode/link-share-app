import styled from "styled-components";

import pfp from '../assets/profile.png';

const Card = () => {
    return (
        <Container></Container>
    );
}

export default Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
`;