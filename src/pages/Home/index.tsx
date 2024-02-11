import styled from "@emotion/styled"
import { CardContainer } from "../../components/Card"
import { FaMusic, FaUsers } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { GiSoundWaves } from "react-icons/gi"


const HomeContainer = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
gap:1rem;
justify-content:center;
align-items:center;
margin-bottom:2rem;
`
const Home = () => {
    return (
        <HomeContainer>
            <CardContainer>
                <span>
                    <FaMusic />
                </span>
                <div>
                    <span>25 Songs</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </CardContainer>
            <CardContainer>
                <span>
                    <FaUsers />
                </span>
                <div>
                    <span>3 Artists</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </CardContainer>
            <CardContainer>
                <span>
                    <IoIosAlbums />
                </span>
                <div>
                    <span>5 Albums</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </CardContainer>
            <CardContainer>
                <span>
                    <GiSoundWaves />
                </span>
                <div>
                    <span>2 Genres</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </CardContainer>
        </HomeContainer>
    )
}

export default Home