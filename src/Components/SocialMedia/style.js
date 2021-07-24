import styled from 'styled-components';

export const SocialSection = styled.div`
    height: auto;
    padding: 10px 0;
    overflow: hidden;
    width: 100%;
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    margin: 6px;
    width: 24%;
    float: left;
    box-sizing: border-box;
    padding: 40px 0;
    box-shadow: 5px 5px 20px #333, 5px 5px 20px #333;
    cursor: pointer;
    transition: .3s ease-in-out;
    background: ${props => props.item === 1 ? '#3b5998' : ''};
    background: ${props => props.item === 2 ? '#498cbf' : ''};
    background: ${props => props.item === 3 ? '#dd4b39' : ''};
    background: ${props => props.item === 4 ? '#bd081c' : ''};

    &:hover {
        transform: scale(.95, .95);
    }

    @media (max-width:1220px) {
        margin: 10px;
        width: 23%;
    }

    @media (max-width:1020px) {
        margin: 14px;
        width: 22%;
    }

    @media (max-width:950px) {
        margin: 8px;
        width: 48%;
    }

    @media (max-width:817px) {
        margin: 6px;
        width: 48%;
    }

    @media (max-width:617px) {
        margin: 4px;
        width: 48%;
    }

    @media (max-width:520px) {
        margin: 4px;
        width: 98%;
    }
`

export const Icon = styled.i`
    color: #FFF;
    float: left;
    margin-right: 20px;
    font-size: 40px;
`

export const Paraghraph = styled.p`
    text-transform: capitalize;
    font-size: 20px;
    color: #fff;
    float: left;
`

export const Span = styled.span`
    display: block;
    margin-bottom: 8px;
    letter-spacing: 2px;
    text-align: center;
`

export const SpanInfo = styled.span`
    text-align: center;
`