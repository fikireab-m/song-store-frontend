import styled from "@emotion/styled";

export const TitleText = styled.span`
font-size: 2rem;
color: #7360df;
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
        
&::before, &::after {
position: absolute;
content: "";
height: 16px;
width: 16px;
border-radius: 50%;
left: 0px;
background-color: #7360df;
}

&::before {
width: 18px;
height: 18px;
background-color: #7360df;
}

&::after {
width: 18px;
height: 18px;
animation: pulse 3s linear infinite;
}
`;
