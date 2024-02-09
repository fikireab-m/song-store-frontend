import styled from '@emotion/styled'
import { ReactNode } from 'react';

interface StyledButonProp {
    isActive?: boolean
    children: ReactNode
}
export const SidebarButton = styled.button<StyledButonProp>`
width: 12rem;
height: 2.5rem;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
padding: 0px 1rem;
margin: 0.25rem 0.5rem;
border-radius: 0.5rem;
border: none;
position: relative;
cursor: pointer;
background:white;
transition-duration: .2s;
${(props) => props.isActive && `background: #F2EFE5;`}
${(props) => !props.isActive && `background: #FFFFFF;`}

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
    background:#F2EFE5;
    transition-duration: .2s;
}

&:active{
    transform: translate(1px , 1px);
    transition-duration: .2s;
}

`
const SidebarMenuButton = ({ isActive, children }: StyledButonProp) => {
    return (
        <SidebarButton isActive={isActive}>
            {children}
            <div>›</div>
        </SidebarButton>

    )
}

export default SidebarMenuButton