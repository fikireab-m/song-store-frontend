import { Artist, rootState } from "../../features/interfaces";
import { GridContainer } from "../../components/styled/GridContainer";
import PageLayout from "../Layout";
import { useSelector } from "react-redux";
import { ArtistCard } from "./Components";

const Artists = () => {
    const songs = useSelector((state: rootState) => state.songs.songs);
    const artists = useSelector((state: rootState) => state.artists.artists);

    const getArtistSongs = (artist: Artist) => {
        const songsByArtist = songs.filter((song) => song.artist.name === artist.name);
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
        <PageLayout pageIndex={2}>
            <GridContainer>
                {
                    artists.map((artist, index) => (
                        <ArtistCard key={index}>
                            <div >
                                <div>
                                    <img src='/assets/artist.jpeg' alt="" />
                                </div>
                            </div>
                            <div>
                                <span>{artist.name}</span>
                                <div>
                                    <div>
                                        <span>{getArtistSongs(artist).length}</span>
                                        <span>Songs</span>
                                    </div>
                                    <div>
                                        <span>{getArtistAlbums(artist).length}</span>
                                        <span>Albums</span>
                                    </div>
                                </div>
                            </div>
                        </ArtistCard>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Artists