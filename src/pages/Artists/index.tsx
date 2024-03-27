import { Artist, rootState } from "../../features/interfaces";
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";
import { ArtistCard } from "./Components";
import { motion } from "framer-motion";

const Artists = () => {
    const songs = useSelector((state: rootState) => state.songs.songs);
    const artists = useSelector((state: rootState) => state.artists.artists);

    const getArtistSongs = (artist: Artist) => {
        const songsByArtist = songs.filter((song) => song.artist.fname === artist.fname && song.artist.lname === artist.lname);
        return songsByArtist;
    }

    const getArtistAlbums = (artist: Artist) => {
        const filteredSongs = getArtistSongs(artist);

        const albumsByArtist = new Set<string>();
        for (const song of filteredSongs) {
            albumsByArtist.add(song.album.name)
        }
        return [...albumsByArtist];
    }
    return (
        <PageLayout pageIndex={2} pageTitle="Melody-Mall/Artists">
            <GridContainer>
                {
                    artists.map((artist, index) => (
                        <motion.div
                            initial={{ y: 150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 * index }}>
                            <ArtistCard key={index}>
                                <div >
                                    <div>
                                        <img src='/assets/artist.jpeg' alt="" />
                                    </div>
                                </div>
                                <div>
                                    <span>{artist.fname} {artist.lname}</span>
                                    <div>
                                        <div>
                                            <span>{getArtistSongs(artist).length}</span>
                                            <span>{getArtistSongs(artist).length > 1 ? "Songs" : "Song"}</span>
                                        </div>
                                        <div>
                                            <span>{getArtistAlbums(artist).length}</span>
                                            <span>{getArtistAlbums(artist).length > 1 ? "Albums" : "Album"}</span>
                                        </div>
                                    </div>
                                </div>
                            </ArtistCard>
                        </motion.div>
                    ))
                }
            </GridContainer>
        </PageLayout >
    )
}

export default Artists