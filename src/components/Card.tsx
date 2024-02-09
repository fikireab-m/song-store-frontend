import styled from "@emotion/styled"

const CardContainer = styled.div`
width:18rem;
height:8rem;
background-color: whiteSmoke;
box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
border-radius: 1rem;
padding: 0.5rem;
display:flex;
justify-content:space-between;
align-items:center;

&>span{
    width:6rem;
    height:6rem;
    border-radius:50%;
    background:grey;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const Card = () => {
    return (
        <CardContainer>
            <span>
                Icon
            </span>
            <h3>25 songs</h3>
        </CardContainer>
    )
}

export default Card