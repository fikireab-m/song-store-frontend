import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
position:fixed;
top:0.5rem;
right:1rem;
left:15.5rem;
z-index:10;
grid-area: header;
background-color: #ffffffc8;
padding:0.5rem 0;
border-radius:1rem;
display:flex;
align-items:center;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);

@media only screen and (max-width: 760px) {
  & {
    right:0.5rem;
    left:4rem;
  }
}
`
export const SidebarContainer = styled.div`
position:fixed;
top:0.5rem;
left:0.5rem;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
@media only screen and (max-width: 760px) {
  & {
    left:0;
  }
}
`
export const MainContainer = styled.div`
margin-top:5rem;
margin-left:15.5rem;
margin-right:1rem;
height: max-content;
border-radius: 1rem;

@media only screen and (max-width: 760px) {
  & {
    margin-left:4rem;
    margin-right:0.5rem;
  }
}
`;

