import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'
import { Fade } from 'react-reveal';
import AnimatedPage from './AnimatedPage';
import { BsFillPhoneFill, BsFillMegaphoneFill, BsWebcamFill, BsFillShieldFill } from "react-icons/bs";

const Services = () => {
    const cardData = [
        {
            id: 1,
            cardIcon: <BsWebcamFill />,
            cardTitle: 'Web Design',
            cardText: "Service that provides best quality and at the request of the clients, with professional work and customer support.",
        },
        {
            id: 2,
            cardIcon: <BsFillPhoneFill />,
            cardTitle: 'Responsive Design',
            cardText: "Every website should be built with two primary goals Firstly, it need to work across all devices Secondly, it needs to be fast as possible.",
        },
        {
            id: 3,
            cardIcon: <BsFillMegaphoneFill />,
            cardTitle: 'Seo Marketing',
            cardText: "Text on internet that will be specially optimized so that search engines will find or under stand them better.",
        },
        {
            id: 4,
            cardIcon: <BsFillShieldFill />,
            cardTitle: 'Secure Web',
            cardText: "Service that provides best quality and at the request of the clients, with professional work and customer support.",
        },
    ];
    return (
        <AnimatedPage>
            <Styledsection>
                <Fade top distance="50%" duration={1500}>
                    <h1>Our <span>Services</span></h1>
                </Fade>
                <div className="container-fluid">

                    <div className="row">
                        <Fade center duration={1500}>
                            {
                                cardData.map((cur, i) => (

                                    <div className="card col-lg-4 col-md-6 col-12" key={cur.id}>
                                        <div className="cardIcon">{cur.cardIcon}</div>
                                        <h3>{cur.cardTitle}</h3>
                                        <p>{cur.cardText}</p>
                                        <a href="/">Read more</a>
                                    </div>

                                ))
                            }
                        </Fade>
                    </div>
                </div>
            </Styledsection >
        </AnimatedPage>
    );
}

export default Services;

const Styledsection = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 76px);
    background: ${({ theme }) => theme.colors.bg};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    h1{
        font-weight: 700;
        margin-bottom: 30px;
        font-size: 40px;
        color: ${({ theme }) => theme.colors.heading};
        span{
            color: ${({ theme }) => theme.colors.mainBlue};
        }
    }
    .row{
        display: flex;
        gap: 20px;
        justify-content: center;
        .card{
            padding: 20px;
            border-radius: 10px;
            display: flex;
            gap: 8px;
            flex-direction: column;
            align-items: center;
            background: ${({ theme }) => theme.colors.cards};
            
            border: 2px solid transparent;
            transition: all .2s;

            .cardIcon{
                text-align: center;
                font-size: 50px;
                color: ${({ theme }) => theme.colors.mainBlue};
            }
            h3{
                font-size: 25px;
                font-weight: 700;
                text-align: center;
                color: ${({ theme }) => theme.colors.heading};
            }
            p{
                text-align: center;
                color: ${({ theme }) => theme.colors.smallText};
            }
            a{
                text-decoration: none;
                background: ${({ theme }) => theme.colors.mainBlue};
                color: ${({ theme }) => theme.colors.bgLight};
                font-weight: 700;
                padding: 5px 20px;
                border-radius: 20px;
                font-size: .9rem;
                box-shadow: 0 0 10px ${({ theme }) => theme.colors.mainBlue};
            }
        }
        .card:hover{
            transform: scale(1.1);
            border: 2px solid ${({ theme }) => theme.colors.mainBlue};
            // box-shadow: 0 0 10px ${({ theme }) => theme.colors.mainBlue};
        }
    }
`