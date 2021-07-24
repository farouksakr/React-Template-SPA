import styled from 'styled-components';

export const HomeSection = styled.div`
    height: 540px;
    background: url('images/home-bg.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #dd4618;
    text-shadow: 5px 5px 10px #000;

    @media (max-width:768px) {
        font-size: 40px;
        color: #fff
        color: #dd4618;
    }
    @media(max-width: 575px) {
        font-size: 30px;
        color: #dd4618;
    }
`

export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #dd4618;
    margin-bottom: 20px;
    text-shadow: 5px 5px 10px #000;

    @media (max-width:768px) {
        font-size: 20px;
    }
`

export const HomeDesc = styled.p`
    font-size: 22px;
    line-height: 1.5;
    color: #dd4618;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-shadow: 5px 5px 10px #000;

    @media (max-width:768px) {
        font-size: 15px;
    }
`

export const Span = styled.span`
    color: #fff
`

export const HomeBtn = styled.button`
    background: #dd4618;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: transparent;
    padding: 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: .4s ease-in-out;

    &:hover {
        background: #fff;
        letter-spacing: 1px;
        color: #dd4618
    }
`