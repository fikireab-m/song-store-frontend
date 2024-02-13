import styled from '@emotion/styled';
import { Song } from '../../features/interfaces';
import { Table } from '../../components/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
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
const ActionBar = styled.span`
display:flex;
justify-content:center;
align-items:center;
gap:0.5rem;

button{
    width:2rem;
    height:2rem;
    color: #7360DF;
    border-radius:50%;
    padding:0.5rem;
    background: none;
    border:2px solid #7360DF;
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        background:#7360DF;
        color:white;
    }
}
`

const Songs = ({ songs, title }: SongsProp) => {
    /* const dateString = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString(
            'en-US',
            { day: '2-digit', month: '2-digit', year: 'numeric' });
        return formattedDate;
    } */
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
                            <td>
                                <ActionBar>
                                    <button><FaRegEdit /></button>
                                    <button><FaRegTrashAlt /></button>
                                </ActionBar>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Songs
