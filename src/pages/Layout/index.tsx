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

const GridLayout = styled.div`
display: grid;
grid-template-areas:
  'sidemenu header header header header header header header header'
  'sidemenu main main main main main main right right';
gap: 0.75rem;
`
const HeaderContainer = styled.div`
height:2rem;
grid-area: header;
background-color: white;
padding:1rem;
border-radius:1rem;
display:flex;
align-items:center;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const SidebarHeader = styled.div`
width:100%;
padding:0.5rem 1rem;
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
max-width:max-content;
grid-area: sidemenu;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const MainContainer = styled.div`
grid-area: main;
height: max-content;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
padding:1rem;
background-color: white;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const RightSide = styled.div`
width:16rem;
grid-area: right;
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
        <div>
            <GridLayout>
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
                    <Home songs={songs} albums={albums} artists={artists} genres={genres}/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat beatae incidunt consequatur aliquam. Nam, facere obcaecati cum nulla voluptate ad sequi nisi in repellat mollitia modi ab animi magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quasi maiores iusto quia eos, illo nobis consequatur minima impedit, repudiandae soluta nulla beatae corporis dolor possimus tempore laboriosam. Hic.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsam magnam et obcaecati perferendis impedit quia tenetur in officia harum blanditiis cum soluta, nulla unde quas alias. Ipsa, facilis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse quibusdam laudantium quas autem veritatis vitae, veniam dignissimos, distinctio nemo error rerum corporis reiciendis voluptates iusto voluptate et vero quidem!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat beatae incidunt consequatur aliquam. Nam, facere obcaecati cum nulla voluptate ad sequi nisi in repellat mollitia modi ab animi magnam.
                </MainContainer>
                <RightSide>Right</RightSide>
            </GridLayout>
        </div>
    )
}

export default PageLayout