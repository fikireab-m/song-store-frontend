import styled from "@emotion/styled"

export const CardContainer = styled.div`
min-width:16rem;
height:8rem;
background-color: #fff;
box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
border-radius: 1rem;
padding: 0.5rem;
display:flex;
justify-content:space-between;
align-items:center;
gap:1rem;

&>span{
    width:8rem;
    height:8rem;
    box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#7360df60;
    font-size:6rem;
}

&>div{
    border-radius: 1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    &>span{
        font-size:1.5rem;
        font-weight:bold;
        color:#afafaf;
    }

    &>p{
        text-align:center;
        font-size:1rem;
        font-weight:300;
    }
}
`