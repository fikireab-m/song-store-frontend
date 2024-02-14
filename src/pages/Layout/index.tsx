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
import SimpleBarChart from "../../components/charts/BarChart";
import PieChart from "../../components/charts/PieChart";
import SongTile from "../../components/SongTile";
import { SongForm } from "../../components/songform/Form";
import Sidebar from "../../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Songs from "../Songs";
import Loader from "../../components/Loader";

const HeaderContainer = styled.div`
position:fixed;
top:0.5rem;
right:19rem;
left:15rem;
grid-area: header;
background-color: #ffffffc8;
padding:0.5rem 0;
border-radius:1rem;
display:flex;
align-items:center;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const SidebarContainer = styled.div`
position:fixed;
top:0.5rem;
left:0.5rem;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
const MainContainer = styled.div`
margin-top:5rem;
margin-left:14rem;
margin-right:18rem;
height: max-content;
border-radius: 1rem;
padding:1rem;
`
const RightSide = styled.div`
position:fixed;
top:0.5rem;;
right:0.5rem;
width:18rem;
min-height:100vh;
background-color: white;
border-top-left-radius: 1rem;
border-top-right-radius: 1rem;
box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
`
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
    }, [dispatch]);

    return (
        <>
            <SongForm isOpen={isOpen} closeForm={setIsOpen} />
            <HeaderContainer>
                <Header openForm={setIsOpen} />
            </HeaderContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <MainContainer>
                {
                    songs.length === 0 ? <Loader />
                        : <Router>
                            <Routes>
                                <Route path="/" element={<Home songs={songs} albums={albums} artists={artists} genres={genres} />} />
                                <Route path="/songs" element={<Songs songs={songs} title="All songs" />} />
                            </Routes>
                        </Router>
                }
            </MainContainer>
            <RightSide>
                <PieChart
                    titleText="All time analysis"
                    legendOrientation={"left"}
                    dataValue={[songs.length, artists.length, albums.length, genres.length]} />
                <SimpleBarChart title="Songs this week" dataset={[
                    {
                        label: "Songs",
                        data: [4, 2, 1, 4, 3, 2, 5],
                        borderColor: "#7360DF",
                        backgroundColor: "#7360df86",
                        lineTension: 0.5,
                    }
                ]} />
                {
                    songs.length > 3 ? songs.slice(0, 3)
                        .map((song, index) => <SongTile song={song} key={index} />) :
                        songs.map((song, index) => <SongTile song={song} key={index} />)
                }
            </RightSide>
        </>
    )
}

export default PageLayout