import styled from "styled-components";


export const ContactSection = styled.div`
    padding: 20px 0;
    text-align: center
`

export const ContactTitle = styled.h2`
    font-size: 50px;
    margin-bottom: 20px;
    text-shadow: 5px 5px 10px #dd4618;

    @media (max-width:575px) {
        font-size: 40px
    }
`

export const Form = styled.form`
    width: 80%;
    margin: auto;
}
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin: 10px 0;
`

export const InputText = styled(Input)`
    float: left;
    width: 49%;

    @media (max-width:991px) {
        float: none;
        width: 100%
    }
    @media (max-width:979px) {
        float: none;
        width: 100%
    }
`

export const InputEmail = styled(Input)`
    float: right;
    width: 49%;
    
    @media (max-width:991px) {
        float: none;
        width: 100%
    }
    @media (max-width:979px) {
        float: none;
        width: 100%
    }
`

export const InputSubject = styled(Input)`
    width: 100%;
`

export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    padding: 10px;
    margin: 10px 0;
    background: #eee;
    box-sizing: border-box;
`

export const InputSubmit = styled(Input)`
    width: 50%;
    background: #fff;
    border: 1px solid #777;
    color: #111;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
    cursor: pointer;
    transition: .4s ease-in-out;
    box-shadow: 5px 5px 10px #777, -5px -5px 10px #777;

    &:hover {
        color: #dd4618;
        border: 1px solid #dd4618;
        letter-spacing: 4px;
        box-shadow: 5px 5px 10px #dd4618, -5px -5px 10px #dd4618;
    }
`