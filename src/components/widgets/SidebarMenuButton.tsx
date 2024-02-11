import styled from '@emotion/styled'
import { ReactNode } from 'react';

interface StyledButonProp {
    children: ReactNode
}

export const SidebarButton = styled.button`
width: 12rem;
height: 2.5rem;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
padding: 0px 1rem;
margin: 0.5rem 0.75rem;
border-radius: 0.5rem;
border: none;
position: relative;
font-size:1rem;
cursor: pointer;
background:whiteSmoke;
transition-duration: .5s;

&>div{
    position: absolute;
    right: 0;
    width: 30px;
    height: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}

&:hover{
    background:#7360DF;
    color:white;
    letter-spacing:5px;
    transition-duration: .5s;
}

&:active{
    transform: translate(1px , 1px);
    transition-duration: .2s;
}
`
const SidebarMenuButton = ({children}:StyledButonProp) => {
    return (
        <SidebarButton>
            {children}
            <div>›</div>
        </SidebarButton>

    )
}

export default SidebarMenuButton