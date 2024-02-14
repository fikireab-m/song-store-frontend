import styled from "@emotion/styled";

export const MiniList = styled.div`
    width:100%;
    height:8rem;
    background-color:#ffffff;
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
    background: #7360df94; 
    border-radius: 0.75rem;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #7360DF; 
    }

    div:not(:nth-child(1)){  
    margin-top:0.1rem;
    }

    div{
        border-radius:0.5rem;
        display:flex;
        flex-direction:column;
        justify-items:start;
        background-color:#f7f7f7;

    span{
        color:#999;
        padding:0.2rem;
        font-size:0.9rem
    }
    }
`;