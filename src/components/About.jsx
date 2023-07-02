import React from 'react';
import styled from 'styled-components';
import './about.css';
import { Fade } from 'react-reveal';
import AnimatedPage from './AnimatedPage';

const About = ({ profile }) => {
    return (
        <AnimatedPage>
            <StyledSection className='about'>
                <Fade center duration={700}>
                    <div className='imageSide'>
                        <img src={profile} alt="myImage" />
                    </div>
                </Fade>
                <div className="textSide">
                    <Fade bottom distance="90%" duration={600} delay={50}>
                        <h1>About <span>Me</span></h1>
                        <h3>Frontend Developer!</h3>
                        <p>Currently pursuing software engineering degree from City University of Science and Technology. I'm a web Designer with extensive experience for over 1+ Year. My experties is to create and website design, and many more..</p>
                        <a href="/">Read More</a>
                    </Fade>
                </div>
            </StyledSection>
        </AnimatedPage>
    );
}

export default About;


const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.bgLight};
    .textSide{
        h1{
            color: ${({ theme }) => theme.colors.heading};
            span{
                color: ${({ theme }) => theme.colors.mainBlue};
            }
        }
        h3{
            color: ${({ theme }) => theme.colors.heading};
        }
        p{
            color: ${({ theme }) => theme.colors.smallText};
        }
        a{
            background: ${({ theme }) => theme.colors.mainBlue};
            color: ${({ theme }) => theme.colors.bgLight};
            box-shadow: 0 0 10px ${({ theme }) => theme.colors.mainBlue};
        }
    }
`