import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './portfolio.css';
import { Fade } from 'react-reveal';
import AnimatedPage from './AnimatedPage';

const Portfolio = ({ one, two, three, four, five, six }) => {
    const projectData = [
        {
            id: 1,
            cardIcon: 'ICON1',
            cardTitle: 'Web Design',
            cardText: "Service that provides best quality and at the request of the clients, with professional work and customer support.",
            image: one,
        },
        {
            id: 2,
            cardIcon: 'ICON2',
            cardTitle: 'Responsive Design',
            cardText: "Every website should be built with two primary goals Firstly, it need to work across all devices Secondly, it needs to be fast as possible.",
            image: two,
        },
        {
            id: 3,
            cardIcon: 'ICON3',
            cardTitle: 'Seo Marketing',
            cardText: "Text on internet that will be specially optimized so that search engines will find or under stand them better.",
            image: three,
        },
        {
            id: 4,
            cardIcon: 'ICON1',
            cardTitle: 'Web Design',
            cardText: "Service that provides best quality and at the request of the clients, with professional work and customer support.",
            image: four,
        },
        {
            id: 5,
            cardIcon: 'ICON2',
            cardTitle: 'Responsive Design',
            cardText: "Every website should be built with two primary goals Firstly, it need to work across all devices Secondly, it needs to be fast as possible.",
            image: five,
        },
        {
            id: 6,
            cardIcon: 'ICON3',
            cardTitle: 'Seo Marketing',
            cardText: "Text on internet that will be specially optimized so that search engines will find or under stand them better.",
            image: six,
        },
    ];
    return (
        <AnimatedPage>
            <Styledsection>
                <Fade top distance="50%" duration={1500}>
                    <h1>Latest <span>Projects</span></h1>
                </Fade>
                <div className="container-fluid">
                    <div className="row">
                        <Fade center duration={1500}>
                            {
                                projectData.map((cur, i) => (
                                    <div className="card col-lg-4 col-md-6 col-12"
                                        key={cur.id}
                                        style={{
                                            backgroundImage: `url(${cur.image})`,
                                        }}
                                    >
                                        <div className="hover">
                                            <h2>{cur.cardTitle}</h2>
                                            <p>{cur.cardText}</p>
                                            <a href="/">Read more</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </Fade>
                    </div>
                </div>
            </Styledsection>
        </AnimatedPage>
    );
}

export default Portfolio;

const Styledsection = styled.section`
    width: 100%;
    min-height: calc(100vh - 76px);
    background: ${({ theme }) => theme.colors.bg};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px !important;
    h1{
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 40px !important;
        color: ${({ theme }) => theme.colors.heading};
        span{
            color: ${({ theme }) => theme.colors.mainBlue};
        }
    }
    .row{
        display: flex;
        justify-content: center;
        
        .card{
            border: 4px solid ${({ theme }) => theme.colors.bg};
            text-align: center;
            padding: 20px 0 0 0 !important;
            background-color: ${({ theme }) => theme.colors.cards};
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            border-radius: 20px;
            .hover{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                h2{
                    font-weight: 700;
                    color: ${({ theme }) => theme.colors.smallText};
                }
                p{
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
        }
    }
    `