import styled from "@emotion/styled";

export const MiniList = styled.div`
    width:100%;
    max-height:8rem;
    background-color:var(--white);
    padding:0.2rem;
    border-radius:1rem;
    box-shadow: -0.05rem 0 0.25rem #77777775;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.3rem grey; 
    border-radius: 0.75rem;
    }

    ::-webkit-scrollbar-thumb {
    background: var(--primary-light); 
    border-radius: 0.75rem;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: var(--primary); 
    }

    div:not(:nth-child(1)){  
    margin-top:0.1rem;
    }

    div{
        border-radius:0.5rem;
        display:flex;
        flex-direction:column;
        justify-items:start;
        background-color: var(--white-smoke);

    span{
        color: var(--grey);
        padding:0.2rem 0.5rem;
        font-size:0.9rem
    }
    }
`;

export const MiniLink = styled.span`
    justify-content:flex-end;
    align-items:center;
    display:flex;

    &>*{
        margin-right:1rem;
        color: var(--primary);
        text-decoration:none;
    }
`;