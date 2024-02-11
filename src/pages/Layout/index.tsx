import styled from "@emotion/styled"
import SidebarMenuButton from "../../components/widgets/SidebarMenuButton"
import { GoHome } from "react-icons/go";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import Header from "../../components/Header";
import Home from "../Home";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../features/interfaces";
import { useEffect } from "react";
import { getSongsFetch } from "../../features/song/songSlice";
import { getAlbumsFetch } from "../../features/album/albumSlice";
import { getArtistsFetch } from "../../features/artist/artistSlice";
import { getGenresFetch } from "../../features/genre/genreSlice";
import Songs from "../Songs";

const HeaderContainer = styled.div`
position:fixed;
top:0.5rem;
right:22rem;
left:16rem;
grid-area: header;
background-color: #ffffffc8;
padding:0.5rem 0;
border-radius:1rem;
display:flex;
align-items:center;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const SidebarHeader = styled.div`
padding-top:1rem;
display:flex;
align-items:center;
gap:0.5rem;
color:#7360DF;
font-size:1.2rem;

&>img{
    height:2.5rem;
}
`
const SidebarContainer = styled.div`
position:fixed;
top:0.5rem;
left:0.5rem;
width:14rem;
height:100vh;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const MainContainer = styled.div`
margin-top:5rem;
margin-left:14rem;
margin-right:20rem;
height: max-content;
border-radius: 1rem;
padding:1rem;
background-color: white;
`
const RightSide = styled.div`
position:fixed;
top:0.5rem;;
right:0.5rem;
width:18rem;
height:100vh;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
padding:1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const Divider = styled.hr`
width:80%;
text-align:center;
opacity:0.5;
margin-bottom:1rem;
`
const PageLayout = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);
    const artists = useSelector((state: rootState) => state.artists.artists);
    const genres = useSelector((state: rootState) => state.genres.genres);

    useEffect(() => {
        dispatch(getSongsFetch());
        dispatch(getAlbumsFetch());
        dispatch(getArtistsFetch());
        dispatch(getGenresFetch());
    }, [dispatch]);

    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <SidebarContainer>
                <SidebarHeader>
                    <img src="/icon.svg" alt="logo" />
                    <span>Melody-Mall</span>
                </SidebarHeader>
                <Divider />
                <SidebarMenuButton >
                    <GoHome />
                    <span>Home</span>
                </SidebarMenuButton>
                <SidebarMenuButton>
                    <CiMusicNote1 />
                    <span>Songs</span>
                </SidebarMenuButton>
                <SidebarMenuButton>
                    <FiUsers />
                    <span>Artists</span>
                </SidebarMenuButton>
                <SidebarMenuButton >
                    <IoAlbumsOutline />
                    <span>Albums</span>
                </SidebarMenuButton>
                <SidebarMenuButton >
                    <BsSoundwave />
                    <span>Genres</span>
                </SidebarMenuButton>
            </SidebarContainer>
            <MainContainer>
                <Home songs={songs} albums={albums} artists={artists} genres={genres} />
                <Songs songs={songs} />
            </MainContainer>
            <RightSide>
                <h1>Right</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, facilis perferendis. Delectus repellat obcaecati aliquid itaque, quaerat nesciunt eos molestiae voluptatum! Debitis ea eaque iusto obcaecati, quae odio quisquam ad.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius facilis quo non, in magni nesciunt ut aliquid delectus earum ratione reiciendis doloribus exercitationem at, dignissimos unde ea repellendus. Eaque.
            </RightSide>
        </>
    )
}

export default PageLayout