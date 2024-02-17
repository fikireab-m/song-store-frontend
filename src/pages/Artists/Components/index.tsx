import styled from "@emotion/styled"

export const ArtistCard = styled.div`
min-width:18.5rem;
height:100%;
padding-bottom:0.5rem;
background-color: #fff;
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);
border-radius: 1rem;
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:1rem;
transition:all .5s;

&:hover{
box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2), 
-0.5rem -0.5rem 0.5rem #c0c0c095 inset, 
0.5rem 0.5rem 0.5rem #c0c0c095 inset;
}

&>div{
    flex-grow:1;
    display:flex;
    align-items:flex-start;
    align-items:center;
    padding-right:0.25rem;
    gap:1rem;

    p{
        font-size:1.5rem;
        font-weight:bold;
        color:#aaa;
        margin:0;
    }
    
    span{
        font-size:1rem;
        font-weight:300;
        margin:0;
    }
    

    &>span{
    width:4rem;
    height:4rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display:flex;
    padding:0.25rem;
    justify-content:center;
    align-items:center;
    color:#7360dfb9;
    font-size:6rem;
}
}
`;