import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { getSongsRequest } from "../../features/song/songSlice";
import { getAlbumsRequest } from "../../features/album/albumSlice";
import { getArtistsRequest } from "../../features/artist/artistSlice";
import { getGenresRequest } from "../../features/genre/genreSlice";
import { NewSongForm } from "../Songs/newSong/NewSongForm";
import Sidebar from "../../components/Sidebar";
import Loader from "../../components/Loader";
import { HeaderContainer, MainContainer, SidebarContainer, } from "./Components";
import { rootState } from "../../features/interfaces";
import { motion } from "framer-motion";

interface LayoutProp {
    pageTitle: string;
    pageIndex?: number;
    children: ReactNode;
}

const PageLayout = ({ pageIndex = 0, pageTitle, children }: LayoutProp) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const loading = useSelector((state: rootState) => state.songs.songs).length === 0;

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
                <Header openForm={setIsOpen} page={pageTitle} />
            </HeaderContainer>
            <SidebarContainer>
                <Sidebar pageIndex={pageIndex} />
            </SidebarContainer>
            <MainContainer>
                {<motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    {children}
                </motion.div>
                }
            </MainContainer>

        </>
    )
}

export default PageLayout