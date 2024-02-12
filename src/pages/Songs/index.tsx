import styled from '@emotion/styled';
import { Song } from '../../features/interfaces';
import { Table } from '../../components/TableLayout';
interface SongsProp {
    songs: Song[];
    title: string;
}

const TitleText = styled.span`
    font-size:1.5rem;
    font-weight:bold;
    color:#afafaf;
    padding-left:2rem;
`
const Container = styled.div<{ show: boolean }>`
    display: ${props => props.show ? "block" : "none"}
`

const Songs = ({ songs, title }: SongsProp) => {
    const dateString = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString(
            'en-US',
            { day: '2-digit', month: '2-digit', year: 'numeric' });
        return formattedDate;
    }
    return (
        <Container show={songs.length > 0}>
            <TitleText>
                {title}
            </TitleText>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.album.name}</td>
                            <td>{song.artist.name}</td>
                            <td>{song.genre}</td>
                            <td>{dateString(`${song.createdAt?.toString()}`)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Songs
