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
        border: 1px solid #7360df63;
        border-radius: 0.75rem;

        &:focus{
            border: 1px solid #7360df;
        }
    }
    &>span{
        position: absolute;
        left: 0.75rem;
        top: 0.75rem;
        color: grey;
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
    background-color: #7360DF;
    padding: 0.75rem;
    border-radius: 0.75rem;
    color: #fff;
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