import styled from "@emotion/styled";

export const MiniList = styled.div`
    width:100%;
    background-color:#ffffff;
    padding:0.2rem;
    border-radius:1rem;
    box-shadow: -0.05rem 0 0.25rem #77777775;
    
    div:not(:nth-child(1)){  
    margin-top:0.2rem;
    }
    div{
    border-radius:1rem;
    display:flex;
    flex-direction:column;
    justify-items:start;
    background-color:#f7f7f7;

    span{
        color:#999;
        padding:0.25rem;
    }
    }
`;