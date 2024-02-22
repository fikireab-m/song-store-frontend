import styled from "@emotion/styled";

export const SidebarComp = styled.div`    
    width:14rem;
    height:100svh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    @media only screen and (max-width: 760px)  {
        &{
            width:3.5rem;
        }
    }
`
export const SidebarHeader = styled.div`
    padding-top:1rem;
    display:flex;
    align-items:center;
    gap:0.5rem;
    color:#7360DF;
    font-family:Sofia;
    font-weight:700;
    font-size:1.4rem;

    img{
        height:2.5rem;
    }
    @media only screen and (max-width: 760px)  {
        span{
            display:none;
        }
    }
`;

export const SidebarButton = styled.button< { isActive: boolean } >`
width: 12rem;
height: 2.5rem;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.5rem;
padding: 0px 1rem;
margin: 0.25rem 0.75rem;
border-radius: 0.5rem;
border: none;
position: relative;
font-size:1rem;
cursor: pointer;
background:${props => props.isActive ? "#7360DF" : "whiteSmoke"};
color:${props => props.isActive ? "white" : "inherited"};
transition-duration: .5s;
&>div{
    position: absolute;
    right: 0;
    width: 1.9rem;
    height: 100%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media only screen and (max-width: 760px)  {
        &{
            width:3rem;
            height: 3rem;
            margin: 0.25 0;

            div,span{
            display:none;
        }

        }
    }


&:hover{
    background:#7360df52;
    letter-spacing:5px;
    transition-duration: .5s;
}
&:active{
    outline:none;
}
`;