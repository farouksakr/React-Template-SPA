import styled from 'styled-components';

export const WorkSection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`
export const WorkTitle = styled.h2`
    font-size: 50px;
    text-align: center;
    text-shadow: 5px 5px 10px #dd4618;
`
export const WorkPart = styled.div`
    margin-top: 20px;
    width: 24%;
    float: left;
    height: auto;
    padding: 80px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 5px 5px 10px #777,5px 5px 10px #dd4618;
    margin-left: 1%;
    cursor:pointer;
    transition: .3s ease-in-out;
    &:hover {
        box-shadow: 5px 5px 10px #d63a0a,5px 5px 10px #d63a0a;
        transform: scale(.9, .9);
    }
    @media (max-width: 991px) {
        width: 49%;
        float: right;
        margin-left: 1%;
        margin-right: 0
    }
    @media (max-width:600px) {
        width: 100%;
    }
`

export const  Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const  PartTitle = styled.h4`
    font-size: 25px;
    color: #dd4618;
    margin-bottom: 20px
`

export const  Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const  PartDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`