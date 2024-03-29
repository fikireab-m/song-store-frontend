import styled from "@emotion/styled";

export const TitleText = styled.span`
font-size: 2rem;
color: var(--primary);
font-weight: 600;
letter-spacing: -1px;
position: relative;
display: flex;
align-items: center;
padding-left: 2rem;

@keyframes pulse {
        from {
            transform: scale(1);
            opacity: 1;
        }

        to {
            transform: scale(2);
            opacity: 0;
        }
        }
@media only screen and (max-width: 760px) {
    & {
        font-size:1.5rem;
    }
    }
&::before, &::after {
position: absolute;
content: "";
height: 16px;
width: 16px;
border-radius: 50%;
left: 0px;
background-color: var(--primary);
}

&::before {
width: 18px;
height: 18px;
background-color: var(--primary);
}

&::after {
width: 18px;
height: 18px;
animation: pulse 3s linear infinite;
}
`;

export const TableTitleText = styled.span`
    font-size:1.5rem;
    font-weight:bold;
    color: var(--light-text);
    padding-left:1rem;
    display:block;
    @media only screen and (max-width:760px) {
        &{
            font-size:1rem;
            font-weight:600;
            padding-left:0.5rem;
        }
    }
`;