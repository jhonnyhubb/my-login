import styled from 'styled-components'

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    padding: 0 2rem;
    background-color:#F1F1F1
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 50px;
    font-weight: bold;
    color: #A9A9A9;
`;

export const Form = styled.form`
    background-color:#F8F8FF;
    width: 100%;
    max-width: 480px;
    padding: 50px
`

export const Label = styled.label`
    display: block;
`

export const InputEmail = styled.input`
    width: 100%;
`

export const InputPassword = styled.input`
    width: 100%;
`

export const Actions = styled.div`
    text-align: center;
    margin-top: 0.5rem;
`


export const Button = styled.button`
  background: transparent;
`;