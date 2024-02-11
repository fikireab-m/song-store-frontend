import styled from '@emotion/styled';
import { Song } from '../../features/interfaces';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  th {
    border-bottom: 1px solid #7360dfb9;
    color:#777;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface SongsProp {
    songs: Song[]
}
const Songs = ({ songs }: SongsProp) => {
    const dateString = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString(
            'en-US',
            { day: '2-digit', month: '2-digit', year: 'numeric' });
        return formattedDate;
    }
    return (
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
    );
}

export default Songs
