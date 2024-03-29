import styled from "@emotion/styled";

export const Container = styled.div`
    display:flex;
    margin-top:-5rem;
    align-items:center;
    gap:1rem;
    
    @media only screen and (max-width: 760px) {
    & {
        display:block;
        margin-top:0.5rem;
    }
    }
`;

export const RightSide = styled.div`
width:18rem;
margin:1rem 0;
padding:2rem 0;
background-color: var(--white);
border-radius:1rem;
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2), 
-0.2rem -0.2rem 0.2rem #c0c0c095 inset, 
0.2rem 0.2rem 0.2rem #c0c0c095 inset;

@media only screen and (max-width: 760px) {
  & {
    margin:1rem 0;
    width:100%;
  }
}
`;

export const LinkContainer = styled.span`
    font-size: 1rem;
    transition:all .3s ease-in;
    
    :hover{
        letter-spacing:2px;
        background: var(--white-smoke);
        border-bottom: 1px solid var(--primary);
        }

    &>*{
        padding:0.2rem;
        color:var(--primary);
        text-decoration:none;
    }
    `