import styled from "@emotion/styled"

export const HeaderComp = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
gap:1rem;
padding:0 2rem;

@media only screen and (max-width:460px) {
 &{
    padding:0 0.25rem;
 }   
}

&>span{
    font-size:1rem;
    color:var(--light-grey);
}

&>button{
    width:2.5rem;
    height:2.5rem;
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
`