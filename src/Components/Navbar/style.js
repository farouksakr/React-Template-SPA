import styled from 'styled-components';

export const NavbarSection = styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`
export const Logo = styled.div`
    width: 40%;
    float: left;

    @media (max-width : 1090px) {
        width: 100%;
        float: none;
    }
`
export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;

    @media (max-width : 1090px) {
        font-size: 25px;
        margin: 10px 0;
    }
`
export const UlList = styled.ul`
    width: 60%;
    float: right;
    text-align: right;
    padding: 0;
    margin: 13px 0;

    @media (max-width : 1090px) {
        width: 100%;
        float:  none;
        text-align: left;
        margin: 0;
        display: inline-block
    }
`

export const ListItem = styled.li`
    display: inline-block;
    padding: 10px 10px;
    
    @media (max-width : 991px) {
        text-align: center;
    }
`
export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;

    &:hover {
        color: #dd4618;
    }
`