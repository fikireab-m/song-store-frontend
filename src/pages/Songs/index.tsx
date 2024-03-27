
import { Song, rootState } from '../../features/interfaces';
import { Table } from '../../components/styled/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { UpdateSongForm } from './updatesSong/UpdateSongForm';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongsRequest } from '../../features/song/songSlice';
import ConfirmModal from './deleteSong/ConfirmModal';
import { TableTitleText } from './components/TitleText';
import { ActionBar, Container, TitleContainer } from './components/Container';
import PageLayout from '../Layout';
import { SearchForm } from './components/SearchForm';

const Songs = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state: rootState) => state.songs.songs);

    const [songToEdit, setSong] = useState<Song>(songs[0]);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [songToDelete, setSongToDelete] = useState<Song>(songs[0]);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const searchRef = useRef<HTMLInputElement>(null);

    const handleEdit = (song: Song) => {
        setSong(song);
        setOpenForm(true);
    }
    const handleOpenModal = (song: Song) => {
        setSongToDelete(song);
        setOpenModal(true);
    }
    const handleSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        const keyword = searchRef.current!.value;
        dispatch(searchSongsRequest(keyword));
        console.log(keyword);
    }

    return (
        <PageLayout pageIndex={1} pageTitle="Melody-Mall/Songs">
            <Container>
                {songToEdit && <UpdateSongForm song={songToEdit} isOpen={openForm} formOpen={setOpenForm} />}

                {songToDelete && <ConfirmModal isOpen={openModal} modalOpen={setOpenModal} song={songToDelete} />}
                <TitleContainer>
                    <TableTitleText>
                        All Songs
                    </TableTitleText>
                    <SearchForm onSubmit={handleSearch}>
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <input ref={searchRef} placeholder="Search here ..." required type="text" />
                    </SearchForm>
                </TitleContainer>
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
                                <td>{song.artist.fname} {song.artist.lname}</td>
                                <td>{song.genre.name}</td>
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
        </PageLayout>
    );
}

export default Songs
