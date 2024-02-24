import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: var(--white);
    border-radius:1rem;
    margin-bottom:1rem;

    @media only screen and (max-width: 460px) {
    & {
        font-size:0.6rem;
    }
    }
`;

export const ActionBar = styled.span`
display:flex;
justify-content:flex-start;
align-items:center;
gap:0.5rem;

button{
    width:2rem;
    height:2rem;
    color: var(--primary);
    border-radius:50%;
    padding:0.5rem;
    background: none;
    border:2px solid var(--primary);
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        background:var(--primary);
        color:white;
    }
}
`;


export const TitleContainer = styled.div`
    padding:0.5rem;
    width:80%;
    display:flex;
    justify-content:flex-start;
    gap:2rem;
    align-items:center;

    @media only screen and (max-width:760px) {
        padding:0;
        width:100%; 
        display:block;
    }
`