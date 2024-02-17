import { FaMusic, FaUser } from "react-icons/fa"
import { IoIosAlbums } from "react-icons/io"
import { Artist, rootState } from "../../features/interfaces"
import { MiniList } from "../../components/styled/MiniList"
import { ArtistCard } from "./Components"
import { GridContainer } from "../../components/styled/GridContainer"
import PageLayout from "../Layout"
import { useSelector } from "react-redux"

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
                            <div>
                                <span>
                                    <FaUser />
                                </span>
                                <p> {artist.name}</p>
                            </div>
                            <div>
                                <span>
                                    <h6>{getArtistSongs(artist).length}</h6>
                                    <FaMusic />
                                </span>
                                <MiniList>
                                    {getArtistSongs(artist).map((song, index) => (
                                        <div key={index}>
                                            <span>{song.title}</span>
                                        </div>
                                    ))}
                                </MiniList>
                            </div>
                            <div>
                                <span>
                                    <h6>{getArtistAlbums(artist).length}</h6>
                                    <IoIosAlbums />
                                </span>
                                <MiniList>
                                    {getArtistAlbums(artist).map((album, index) => (
                                        <div key={index}>
                                            <span>{album}</span>
                                        </div>
                                    ))}
                                </MiniList>
                            </div>
                        </ArtistCard>
                    ))
                }
            </GridContainer>
        </PageLayout>
    )
}

export default Artists