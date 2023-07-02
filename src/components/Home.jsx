import React from 'react';
import styled from 'styled-components';
import './home.css';
import { Fade } from 'react-reveal';
import AnimatedPage from './AnimatedPage';

const Home = ({ profile }) => {
    return (
        <AnimatedPage>
            <StyledSection className='home'>
                <div className="textSide">
                    <Fade bottom distance="70%" duration={600}>
                        <h3 className="h3">Hello, It's Me</h3>
                    </Fade>
                    <Fade bottom distance="70%" duration={600} delay={150}>
                        <h1 className="h1">Jawad Wakeel</h1>
                    </Fade>
                    <Fade bottom distance="70%" duration={600} delay={400}>
                        <h3 className="h3">And I'm a <span>FrontEnd Developer</span></h3>
                    </Fade>
                    <Fade bottom distance="70%" duration={600} delay={650}>
                        <p className="parag">Currently pursuing software engineering degree from City University of Science and Technology</p>
                    </Fade>
                    <Fade bottom distance="70%" duration={600} delay={900}>
                        <a href="/" className="btn">Download CV</a>
                    </Fade>
                </div>
                <Fade center distance="70%" duration={600} delay={900}>
                    <div className='imageSide'>
                        <img src={profile} alt="myImage" />
                    </div>
                </Fade>

            </StyledSection>
        </AnimatedPage>
    );
}

export default Home;

const StyledSection = styled.section`
    
    background: ${({ theme }) => theme.colors.bg};
    .textSide{
        .h1{
            color: ${({ theme }) => theme.colors.heading};
        }
        .h3{
            color: ${({ theme }) => theme.colors.heading};
            span{
                color: ${({ theme }) => theme.colors.mainBlue};
            }
        }
        .parag{
            color: ${({ theme }) => theme.colors.smallText};
        }
        .btn{
            background: ${({ theme }) => theme.colors.mainBlue};
            color: ${({ theme }) => theme.colors.bgLight};
            box-shadow: 0 0 10px ${({ theme }) => theme.colors.mainBlue};
        }
    }
  
`