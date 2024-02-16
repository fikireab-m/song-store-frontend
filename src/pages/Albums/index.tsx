import styled from "@emotion/styled"
import { FaMusic, FaUser } from "react-icons/fa"
import { Album, Song } from "../../features/interfaces"
import { MiniList } from "../../components/MiniList"
import { ArtistCard } from "../Artists/components/ArtistCard";

const GridContainer = styled.div`
display:grid;
flex-grow:1;
grid-template-columns: repeat(auto-fill, minmax(18.5rem, 1fr));
gap:1rem;
justify-content:center;
align-items:center;
margin-top: 5.5rem;
margin-bottom: 1.5rem;
`;

interface AlbumsProp {
    songs: Song[];
    albums: Album[];
}
const Albums = ({ albums, songs }: AlbumsProp) => {

    const getSongsInAlbum = (album: Album) => {
        const songsByArtist = songs.filter((song) => song.album.name === album.name);
        return songsByArtist;
    }

    return (
        <GridContainer>
            {
                albums.map((album, index) => (
                    <ArtistCard key={index}>
                        <div>
                            <span>
                                <FaUser />
                            </span>
                            <p> {album.name}</p>
                        </div>
                        <div>
                            <span>
                                <h6>{getSongsInAlbum(album).length}</h6>
                                <FaMusic />
                            </span>
                            <MiniList>
                                {getSongsInAlbum(album).map((song, index) => (
                                    <div key={index}>
                                        <span>{song.title}</span>
                                    </div>
                                ))}
                            </MiniList>
                        </div>
                    </ArtistCard>
                ))
            }
        </GridContainer>
    )
}

export default Albums