import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { getSongsRequest } from "../../features/song/songSlice";
import { getAlbumsRequest } from "../../features/album/albumSlice";
import { getArtistsRequest } from "../../features/artist/artistSlice";
import { getGenresRequest } from "../../features/genre/genreSlice";
import { NewSongForm } from "../Songs/newSong/NewSongForm";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import { HeaderContainer, MainContainer, SidebarContainer, } from "./Components";

interface LayoutProp {
    pageIndex?: number;
    children: ReactNode;
}

const PageLayout = ({ pageIndex = 0, children }: LayoutProp) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getSongsRequest());
        dispatch(getAlbumsRequest());
        dispatch(getArtistsRequest());
        dispatch(getGenresRequest());
        setLoading(false);
    }, [dispatch, isOpen]);

    return (
        <>
            <NewSongForm isOpen={isOpen} openForm={setIsOpen} />
            <HeaderContainer>
                <Header openForm={setIsOpen} />
            </HeaderContainer>
            <SidebarContainer>
                <Sidebar pageIndex={pageIndex} />
            </SidebarContainer>
            <MainContainer>
                {
                    isLoading
                        ? <Loader />
                        : <>{children}</>
                }
            </MainContainer>

        </>
    )
}

export default PageLayout