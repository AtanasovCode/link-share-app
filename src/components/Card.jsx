import styled from "styled-components";

import pfp from '../assets/profile.png';

import Link from "./Link";

const Card = () => {
    return (
        <Container>
            <Heading>
                <ProfilePicture src={pfp} alt="profile picture" />
                <Location>London, United Kingdom</Location>
                <Title>"Front-end developer and avid reader."</Title>
            </Heading>

            <LinksContainer>
                <Link name="Github" link="https://github.com/" />
                <Link name="Frontend Mentor" link="https://www.frontendmentor.io" />
                <Link name="LinkedIn" link="https://www.linkedin.com/" />
                <Link name="Twitter" link="https://twitter.com/" />
                <Link name="Instagram" link="https://www.instagram.com/" />
            </LinksContainer>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.font};
    padding: 2.5rem;

    @media (max-width: 650px) {
        width: 90%;
        align-items: center;
        padding: 1.5rem;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfilePicture = styled.img`
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 1.5rem;
`;

const Location = styled.div`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 1.5rem;
`;

const Title = styled.div`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
`;

const LinksContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-top: 1.5rem;
`;