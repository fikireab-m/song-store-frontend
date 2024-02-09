import styled from "@emotion/styled"
import Card from "../../components/Card"
const HomeContainer = styled.div`
display:flex;
gap:1rem;
justify-content:center;
align-itmes:center;
flex-wrap:wrap;
margin-bottom:2rem;
`
const Home = () => {
    return (
        <HomeContainer>
            {
                Array.from(Array(4)).map((item)=><Card key={item}/>)
            }
        </HomeContainer>
    )
}

export default Home