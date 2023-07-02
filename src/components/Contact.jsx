import React from 'react';
import styled from 'styled-components';
import './contact.css';
import { Fade } from 'react-reveal';
import AnimatedPage from './AnimatedPage';

const Contact = () => {
    return (
        <AnimatedPage>
            <Styledsection className='contact'>
                <Fade top distance="50%" duration={1500}>
                    <h1>Contact <span>Us</span></h1>
                </Fade>
                <div className="container">
                    <Fade bottom distance="50%" duration={1500}>
                        <div className="box">
                            <div className="input"><input type="text" placeholder='Full Name' /></div>
                            <div className="input"><input type="text" placeholder='Email Address' /></div>
                        </div>
                        <div className="box">
                            <div className="input"><input type="text" placeholder='Mobile Number' /></div>
                            <div className="input"><input type="text" placeholder='Email Subject' /></div>
                        </div>
                        <div className="box">
                            <textarea rows="10" cols="" placeholder='Your Message'></textarea>
                        </div>
                    </Fade>
                    <Fade top distance="50%" duration={1500}>
                        <a href="/" className="btn">Send Message</a>
                    </Fade>
                </div>
            </Styledsection>
        </AnimatedPage>
    );
}

export default Contact;

const Styledsection = styled.section`
    background: ${({ theme }) => theme.colors.bg};
    h1{
        color: ${({ theme }) => theme.colors.heading};
        span{
            color: ${({ theme }) => theme.colors.mainBlue};
        }
    }
    .container{
        .box{
            .input{
                input{
                    background: ${({ theme }) => theme.colors.cards};
                    color: ${({ theme }) => theme.colors.heading};
                }
            }
            textarea{
                background: ${({ theme }) => theme.colors.cards};
                color: ${({ theme }) => theme.colors.heading};
            }
        }
        .btn{
            background: ${({ theme }) => theme.colors.mainBlue};
            color: ${({ theme }) => theme.colors.bgLight};
            box-shadow: 0 0 10px ${({ theme }) => theme.colors.mainBlue};
        }
    }

    `