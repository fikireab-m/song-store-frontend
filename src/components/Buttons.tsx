import styled from "@emotion/styled";
import { ReactNode } from "react";

interface SubmitBtnProp {
    color: string;
    onclick: React.MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}
export const SubmitButton = ({ color, children, onclick }: SubmitBtnProp) => {
    const Button = styled.button`
        width: 100%;
        border: none;
        outline: none;
        background-color:${color};
        padding: 0.75rem;
        border-radius: 0.75rem;
        color: var(--white);
        cursor: pointer;
        font-size: 1rem;
        margin-top:1rem;
        transform: .3s ease;

        &:hover {
        background-color: #60a2df;
    }
`
    return (
        <Button onClick={onclick}>
            {children}
        </Button>
    )
}
