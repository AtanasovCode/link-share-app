import styled from "styled-components";

const Link = ({
    name,
    link,
}) => {
    return (
        <Container href={link} target="_blank">
            {name}
        </Container>
    );
}

export default Link;

const Container = styled.a`
    text-decoration: none;
    padding: 0.75rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.font};
    font-size: 0.875rem;
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: all .4s ease;
    border-radius: .5rem;

    &:hover {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.secondary};
    }
`;