
import { Song } from '../../features/interfaces';
import { Table } from '../../components/styled/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { UpdateSongForm } from './updatesSong/UpdateSongForm';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongsRequest } from '../../features/song/songSlice';
import ConfirmModal from './deleteSong/ConfirmModal';
import { getAlbumsRequest } from '../../features/album/albumSlice';
import { getArtistsRequest } from '../../features/artist/artistSlice';
import { getGenresRequest } from '../../features/genre/genreSlice';
import { TableTitleText } from './components/TitleText';
import { ActionBar, Container } from './components/Container';
interface SongsProp {
    songs: Song[];
    title: string;
}

const Songs = ({ songs, title }: SongsProp) => {
    const dispatch = useDispatch();
    const [songToEdit, setSong] = useState<Song>(songs[0]);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [songToDelete, setSongToDelete] = useState<Song>(songs[0]);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleEdit = (song: Song) => {
        setSong(song);
        setOpenForm(true);
    }
    const handleOpenModal = (song: Song) => {
        setSongToDelete(song);
        setOpenModal(true);
    }
    useEffect(() => {
        dispatch(getSongsRequest());
        dispatch(getAlbumsRequest());
        dispatch(getArtistsRequest());
        dispatch(getGenresRequest());
    }, [dispatch, openForm, openModal])
    return (
        <Container show={songs.length > 0}>
            <UpdateSongForm song={songToEdit} isOpen={openForm} formOpen={setOpenForm} />
            <ConfirmModal isOpen={openModal} modalOpen={setOpenModal} song={songToDelete} />
            <TableTitleText>
                {title}
            </TableTitleText>
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
                                    <button onClick={() => handleOpenModal(song)}><FaRegTrashAlt /></button>
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
