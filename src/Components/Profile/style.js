import styled from 'styled-components';

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileInfo = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none
    }
    @media (max-width:768px) {
        margin-bottom: 20px
    }
`
export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 30px;
    text-shadow: 5px 5px 10px #dd4618;
`

export const ProfileList = styled.ul`
    list-style: none
`

export const ProfileItem = styled.li`
    margin-bottom: 15px
`

export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const Web = styled.span`
    font-weight: bold;
    color: #eb5424
`

export const Skills = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none
    }
`
export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px;
    text-shadow: 5px 5px 10px #dd4618;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Title = styled.span`
    float: left;
`

export const Perc = styled.span`
    float: right;
    margin-right: 100px
`

export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.item === 1 ? '100%' : ''};
    width: ${props => props.item === 2 ? '90%' : ''};
    width: ${props => props.item === 3 ? '80%' : ''};
`