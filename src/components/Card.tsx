import styled from "@emotion/styled"

export const CardContainer = styled.div`
min-width:18.5rem;
height:12rem;
background-color: #fff;
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2), 
-0.5rem -0.5rem 0.5rem #c0c0c095 inset, 
0.5rem 0.5rem 0.5rem #c0c0c095 inset;
border-radius: 1rem;
display:flex;
justify-content:stretch;
align-items:center;
gap:1rem;
transition:all .5s;

&:hover{
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);
}

&>span{
    width:8rem;
    height:8rem;
    box-shadow: 0px 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#7360dfb9;
    font-size:6rem;
}

&>div{
    border-radius: 1rem;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    padding:0.5rem;

    &>span{
        font-size:1.5rem;
        font-weight:bold;
        color:#aaa;
    }

    &>p{
        text-align:center;
        font-size:1rem;
        font-weight:300;
        margin:0;
    }
}
`