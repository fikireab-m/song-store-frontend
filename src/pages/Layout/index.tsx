import Header from "../../components/Header";
import Home from "../Home";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../features/interfaces";
import { useEffect, useState } from "react";
import { getSongsRequest } from "../../features/song/songSlice";
import { getAlbumsRequest } from "../../features/album/albumSlice";
import { getArtistsRequest } from "../../features/artist/artistSlice";
import { getGenresRequest } from "../../features/genre/genreSlice";
import { NewSongForm } from "../Songs/newSong/NewSongForm";
import Sidebar from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom"
import Songs from "../Songs";
import Loader from "../../components/Loader";
import Artists from "../Artists";
import Albums from "../Albums";
import Genres from "../Genres";
import { HeaderContainer, MainContainer, SidebarContainer, } from "./Components";

const PageLayout = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const songs = useSelector((state: rootState) => state.songs.songs);
    const albums = useSelector((state: rootState) => state.albums.albums);
    const artists = useSelector((state: rootState) => state.artists.artists);
    const genres = useSelector((state: rootState) => state.genres.genres);

    useEffect(() => {
        dispatch(getSongsRequest());
        dispatch(getAlbumsRequest());
        dispatch(getArtistsRequest());
        dispatch(getGenresRequest());
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
                            <Route path="/artists" element={<Artists artists={artists} songs={songs} />} />
                            <Route path="/albums" element={<Albums songs={songs} albums={albums}/>} />
                            <Route path="/genres" element={<Genres songs={songs} genres={genres} />} />
                        </Routes>
                }
            </MainContainer>

        </>
    )
}

export default PageLayout