import styled from "@emotion/styled"
import Header from "../../components/Header";
import Home from "../Home";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../features/interfaces";
import { useEffect, useState } from "react";
import { getSongsFetch } from "../../features/song/songSlice";
import { getAlbumsFetch } from "../../features/album/albumSlice";
import { getArtistsFetch } from "../../features/artist/artistSlice";
import { getGenresFetch } from "../../features/genre/genreSlice";
import { NewSongForm } from "../Songs/widgets/NewSongForm";
import Sidebar from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom"
import Songs from "../Songs";
import Loader from "../../components/Loader";

const HeaderContainer = styled.div`
position:fixed;
top:0.5rem;
right:1rem;
left:15.5rem;
grid-area: header;
background-color: #ffffffc8;
padding:0.5rem 0;
border-radius:1rem;
display:flex;
align-items:center;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);

@media only screen and (max-width: 760px) {
  & {
    right:0.5rem;
    left:4rem;
  }
}
`
const SidebarContainer = styled.div`
position:fixed;
top:0.5rem;
left:0.5rem;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
@media only screen and (max-width: 760px) {
  & {
    left:0;
  }
}
`
const MainContainer = styled.div`
margin-top:5rem;
margin-left:15rem;
margin-right:0.5rem;
height: max-content;
border-radius: 1rem;

@media only screen and (max-width: 760px) {
  & {
    margin-left:4rem;
  }
}
`;

const PageLayout = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);
    const artists = useSelector((state: rootState) => state.artists.artists);
    const genres = useSelector((state: rootState) => state.genres.genres);

    useEffect(() => {
        dispatch(getSongsFetch());
        dispatch(getAlbumsFetch());
        dispatch(getArtistsFetch());
        dispatch(getGenresFetch());
    }, [dispatch, isOpen]);

    return (
        <>
            <NewSongForm isOpen={isOpen} openForm={setIsOpen} />
            <HeaderContainer>
                <Header openForm={setIsOpen} />
            </HeaderContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <MainContainer>
                {
                    songs.length === 0 ? <Loader />
                        : <Routes>
                            <Route path="/" element={<Home songs={songs} albums={albums} artists={artists} genres={genres} />} />
                            <Route path="/songs" element={<Songs songs={songs} title="All songs" />} />
                            <Route path="/artists" element={<Songs songs={songs} title="All songs" />} />
                            <Route path="/albums" element={<Songs songs={songs} title="All songs" />} />
                            <Route path="/genres" element={<Songs songs={songs} title="All songs" />} />
                        </Routes>
                }
            </MainContainer>

        </>
    )
}

export default PageLayout