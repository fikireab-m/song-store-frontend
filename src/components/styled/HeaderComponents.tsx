import styled from "@emotion/styled"

export const HeaderComp = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width:100%;
gap:1rem;
padding:0 2rem;

@media only screen and (max-width:460px) {
 &{
    padding:0 0.25rem;
 }   
}

&>button{
    width:2.5rem;
    height:2.5rem;
    color: #7360DF;
    border-radius:50%;
    padding:0.5rem;
    background: none;
    border:2px solid #7360DF;
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        background:#7360DF;
        color:white;
    }
}
`