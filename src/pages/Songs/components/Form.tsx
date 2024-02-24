import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 0.75rem;
max-width: 350px;
padding: 0 2rem;
position: relative;

label{
    position: relative;

    &>input{
        width: 100%;
        padding: 0.75rem 1rem;
        outline: 0;
        border: 1px solid var(--primary);
        border-radius: 0.75rem;

        &:focus{
            border: 1px solid var(--primary);
        }
    }
    &>span{
        position: absolute;
        left: 0.75rem;
        top: 0.75rem;
        color: var(--grey);
        font-size: 0.9rem;
        cursor: text;
        transition: 0.3s ease;
    }
    input:placeholder-shown + span {
        top: 1rem;
        font-size: 0.9em;
    }
    input:focus + span,.form label .input:valid + span {
        top: 0;
        font-size: 0.6rem;
        font-weight: 500;
    }
    input:valid + span {
        top: 0;
        font-size: 0.6rem;
        color: green;
    }
}

button {
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--primary);
    padding: 0.75rem;
    border-radius: 0.75rem;
    color: var(--white);
    font-size: 16px;
    margin-top:1rem;
    transform: .3s ease;

    &:hover {
    background-color: #60a2df;
    cursor: pointer;
        }
    }

@keyframes pulse {
from {
    transform: scale(1);
    opacity: 1;
}

to {
    transform: scale(2);
    opacity: 0;
}
}
`;

export const FormContainer = styled.div<{ isOpen: boolean }>`
position:fixed;
width:28rem;
top:0.5rem;;
right:0;
min-height:100svh;
background-color: var(--white);
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: -4rem 0 32rem rgba(0,0,0,0.5);
z-index: 20;
opacity: ${props => props.isOpen ? 1 : 0};
transition: opacity 0.5s ease-in-out;

@media only screen and (max-width: 760px) {
& {
    width:100%;
    top:0;
}
}
&>button{
    margin:1rem;
    font-size:2rem;
    color: var(--primary);
    background: none;
    cursor:pointer;
    border:none;
    transition: all .3s ease;

    &:hover{
        font-weight:bolder;
        color: #ff0062d6;
        transform:scale(1.25);
    }
    }
`;