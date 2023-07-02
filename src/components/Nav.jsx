import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './nav.css';
const Nav = ({onSelect}) => {
    const [btn, setBtn] = useState(false);
    const [darkLight, setDarkLight] = useState(false);
    const handlleClick = () => {
        if (btn === false) {
            setBtn(true);
        }
        else {
            setBtn(false);
        }
    }
    const handleDarkLight = () => {
        if(darkLight === false){
            setDarkLight(true);
            onSelect(darkLight);
        }
        else{
            setDarkLight(false);
            onSelect(darkLight);
        }
    }
    return (
        <StyledHeader>
            <div className='logo'>
                <NavLink to="/" className="nLink" style={{ textDecoration: "none" }}>Portfolio</NavLink>
            </div>
            <div className={btn === false ? 'links' : 'links show'}>
                <NavLink to="/" onClick={() => setBtn(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setBtn(false)}>About</NavLink>
                <NavLink to="/services" onClick={() => setBtn(false)}>Services</NavLink>
                <NavLink to="/portfolio" onClick={() => setBtn(false)}>Portfolio</NavLink>
                <NavLink to="/contact" onClick={() => setBtn(false)}>Contact</NavLink>
                <NavLink 
                    to="/" 
                    onClick={() => {
                        handleDarkLight();
                        setBtn(false)
                    }}
                    style={{background: 'rgba(0,0,0,0.10)'}}
                    >Dark/Light
                    </NavLink>
            </div>
            <div id="toggle" onClick={handlleClick}></div>
        </StyledHeader>
    );
}
export default Nav;

const StyledHeader = styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    background: ${({ theme }) => theme.colors.bg};
    .logo{
        .nLink{
            color: ${({ theme }) => theme.colors.heading};
        }
    }
    .links{
        a{
            color: ${({ theme }) => theme.colors.smallText};
        }
        a:hover{
            color: ${({ theme }) => theme.colors.mainBlue};
        }
        a.active{
            background: ${({ theme }) => theme.colors.mainBlue};
            color: ${({ theme }) => theme.colors.bgLight};
        }
    }
    .show{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        background: ${({ theme }) => theme.colors.cards};
        top: 70px;
        left: 0;
        z-index: 222;
        opacity: 1;
        transition: all .5s;

        a{
            display: block;
            margin: 0  0 10px 0;
        }
    }
    #toggle{
        background-color: ${({ theme }) => theme.colors.bg};
        box-shadow: 1px 2px 4px ${({ theme }) => theme.colors.mainBlue};
    }
    #toggle::before{
        background-color: ${({ theme }) => theme.colors.heading};
    }
    #toggle::after{
        background-color: ${({ theme }) => theme.colors.heading};
    }
`

