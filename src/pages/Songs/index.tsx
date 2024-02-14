import styled from '@emotion/styled';
import { Song } from '../../features/interfaces';
import { Table } from '../../components/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { UpdateSongForm } from './widgets/UpdateSongForm';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongsFetch } from '../../features/song/songSlice';
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
    background-color:#fff;
    border-radius:1rem;
    display: ${props => props.show ? "block" : "none"}
`
const ActionBar = styled.span`
display:flex;
justify-content:flex-start;
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
    const dispatch = useDispatch();
    const [songToEdit, setSong] = useState<Song>(songs[0]);
    const [openForm, setOpenForm] = useState<boolean>(false);
    /* const dateString = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString(
            'en-US',
            { day: '2-digit', month: '2-digit', year: 'numeric' });
        return formattedDate;
    } */
    const handleEdit = (song: Song) => {
        setSong(song);
        setOpenForm(true);
    }
    useEffect(() => {
        dispatch(getSongsFetch());
    }, [dispatch, openForm])
    return (
        <Container show={songs.length > 0}>
            <UpdateSongForm song={songToEdit} isOpen={openForm} formOpen={setOpenForm} />
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
                        <th>Actions</th>
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
                                    <button onClick={() => handleEdit(song)}><FaRegEdit /></button>
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
