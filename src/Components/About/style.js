import styled from 'styled-components';

export const AboutSection = styled.div`
    height: 500px;
    background: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width:991px) {
        height: auto
    }
`

export const AboutInfo = styled.div`
    padding-top: 30px;
    width: 50%;
    float: right;

    @media (max-width:991px) {
        width: 100%;
        float: none
    }
`

export const InfoTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    text-shadow: 5px 5px 10px #dd4618;

    @media (max-width:567px) {
        margin: 15px 0;
    }
`

export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 15px;

    @media (max-width:991px) {
        margin-bottom: 40px;
    }
    @media (max-width:567px) {
        font-size: 30px;
        margin-bottom: 15px;
        margin-top: 10px;
    }
`

export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    text-shadow: 5px 5px 10px #333;
`