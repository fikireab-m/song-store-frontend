
import { Song, rootState } from '../../features/interfaces';
import { Table } from '../../components/styled/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { UpdateSongForm } from './updatesSong/UpdateSongForm';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongsRequest } from '../../features/song/songSlice';
import ConfirmModal from './deleteSong/ConfirmModal';
import { TableTitleText, TitleText } from './components/TitleText';
import { ActionBar, Container, TitleContainer } from './components/Container';
import PageLayout from '../Layout';
import { SearchForm, ThSearchForm } from './components/SearchForm';
import { BiSearchAlt } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const Songs = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state: rootState) => state.songs.songs);
    const allGenres = useSelector((state: rootState) => state.genres.genres);

    const [songToEdit, setSong] = useState<Song>(songs[0]);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [songToDelete, setSongToDelete] = useState<Song>(songs[0]);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const [filterData, setFilterData] = useState({
        key: "",
        title: "",
        album: "",
        artist: "",
        genre: ""
    });
    const [titleSuggestions, setTitleSuggestions] = useState<string[]>([]);
    const [albumSuggestions, setAlbumSuggestions] = useState<string[]>([]);
    const [artistSuggestions, setAritstSuggestions] = useState<string[]>([]);
    const [genreSuggestions, setGenreSuggestions] = useState<string[]>([]);

    const [selected, setSelected] = useState({
        title: "",
        album: "",
        artist: ""
    });

    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [unselectedGenres, setunSelectedGenres] = useState<string[]>([]);

    const { key, title, album, artist, genre } = filterData;

    const titleValues: string[] = [];
    const albumValues: string[] = [];
    const artistValues: string[] = [];
    const genreValues: string[] = [];

    songs.forEach(s => {
        if (!titleValues.includes(s.title)) {
            titleValues.push(s.title)
        }
        if (!albumValues.includes(s.album.name)) {
            albumValues.push(s.album.name)
        }
        if (!artistValues.includes(s.artist.fname + " " + s.artist.lname)) {
            artistValues.push(s.artist.fname + " " + s.artist.lname)
        }
    });
    allGenres.forEach(genre => genreValues.push(genre.name));

    const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFilterData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        const value = e.target.value;
        const name = e.target.name;
        if (value.length > 0) {
            let filteredSuggestions: string[] = [];

            if (name === 'title') {
                filteredSuggestions = titleValues.filter(suggestion =>
                    suggestion.toLowerCase().includes(value.toLowerCase()));
                setTitleSuggestions(filteredSuggestions);
            } else if (name === 'album') {
                filteredSuggestions = albumValues.filter(suggestion =>
                    suggestion.toLowerCase().includes(value.toLowerCase()));
                setAlbumSuggestions(filteredSuggestions)
            } else if (name === 'artist') {
                filteredSuggestions = artistValues.filter(suggestion =>
                    suggestion.toLowerCase().includes(value.toLowerCase()));
                setAritstSuggestions(filteredSuggestions)
            } else if (name === 'genre') {
                filteredSuggestions = genreValues.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase()));
                setGenreSuggestions(filteredSuggestions);
            }
        } else {
            if (name === 'title') {
                setTitleSuggestions([]);
            } else if (name === 'album') {
                setAlbumSuggestions([])
            } else if (name === 'artist') {
                setAritstSuggestions([])
            } else if (name === 'genre') {
                setGenreSuggestions([])
            }
        }
    }
    const handleTitleSuggestionClick = (value: string) => {
        setFilterData(prev => ({
            ...prev,
            title: value
        }));
        setSelected(prev => ({
            ...prev,
            title: value
        }));
        setTitleSuggestions([]);
    };


    const handleAlbumSuggestionClick = (value: string) => {
        setFilterData(prev => ({
            ...prev,
            album: value
        }));
        setSelected(prev => ({
            ...prev,
            album: value
        }));
        setAlbumSuggestions([]);
        console.log(filterData)
    }

    const handleArtistSuggestionClick = (value: string) => {
        setFilterData(prev => ({
            ...prev,
            artist: value
        }));
        setSelected(prev => ({
            ...prev,
            artist: value
        }));
        setAritstSuggestions([]);
        console.log(filterData)
    };

    const handleGenreSuggestionClick = (value: string) => {
        setFilterData(prev => ({
            ...prev,
            genre: value
        }));

        if (selectedGenres.includes(value)) {
            setSelectedGenres(selectedGenres.filter(genre => genre !== value));
            setunSelectedGenres(prev => [...prev, value]);
        } else {
            if (genreValues.includes(value)) {
                setSelectedGenres(prev => [...prev, value]);
                setunSelectedGenres(unselectedGenres?.filter(genre => genre !== value));
            }
        }
    };

    const handleApplyGenre = () => {
        setGenreSuggestions([]);
    }

    const handleEdit = (song: Song) => {
        setSong(song);
        setOpenForm(true);
    }

    const handleOpenModal = (song: Song) => {
        setSongToDelete(song);
        setOpenModal(true);
    }
    const applyFilter = () => {
        dispatch(searchSongsRequest({
            key: filterData.key,
            title: filterData.title,
            album: filterData.album,
            artist: filterData.artist,
            genres: [...selectedGenres]
        }));
    }
    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        applyFilter();
    }

    useEffect(() => {
        setunSelectedGenres([...genreValues]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        applyFilter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedGenres, selected])

    return (
        <PageLayout pageIndex={1} pageTitle="Melody-Mall/Songs">
            <Container>
                {songToEdit && <UpdateSongForm song={songToEdit} isOpen={openForm} formOpen={setOpenForm} />}

                {songToDelete && <ConfirmModal isOpen={openModal} modalOpen={setOpenModal} song={songToDelete} />}

                <TitleContainer>
                    <TableTitleText>
                        All Songs
                    </TableTitleText>
                    <SearchForm onSubmit={handleSubmit}>
                        <button>
                            <BiSearchAlt size={16} />
                        </button>
                        <input value={key} name='key' onChange={onInputchange} placeholder="Search here ..." required type="text" />
                    </SearchForm>
                </TitleContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <div className="autocomplete-wrapper">
                                    <ThSearchForm onSubmit={handleSubmit}>
                                        <input value={title} name='title' onChange={onInputchange} placeholder="Title" autoComplete='Title' />
                                        {selected.title.length > 0
                                            && <button onClick={() => {
                                                setSelected(prev => ({ ...prev, title: "" }));
                                                setFilterData(prev => ({ ...prev, title: "" }));
                                                setTitleSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>}
                                    </ThSearchForm>
                                    {titleSuggestions.length > 0 && (
                                        <ul className="suggestions-list">
                                            {titleSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleTitleSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </th>
                            <th>
                                <div className="autocomplete-wrapper">
                                    <ThSearchForm onSubmit={handleSubmit}>
                                        <input value={album} name='album' onChange={onInputchange} placeholder="Album" />
                                        {selected.album.length > 0
                                            && <button onClick={() => {
                                                setSelected(prev => ({ ...prev, album: "" }));
                                                setFilterData(prev => ({ ...prev, album: "" }));
                                                setAlbumSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>}
                                    </ThSearchForm>
                                    {albumSuggestions.length > 0 && (
                                        <ul className="suggestions-list">
                                            {albumSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleAlbumSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </th>
                            <th>
                                <div className="autocomplete-wrapper">
                                    <ThSearchForm onSubmit={handleSubmit}>
                                        <input value={artist} name='artist' onChange={onInputchange} placeholder="Artist" />
                                        {selected.artist.length > 0
                                            && <button onClick={() => {
                                                setSelected(prev => ({ ...prev, artist: "" }));
                                                setFilterData(prev => ({ ...prev, artist: "" }));
                                                setAritstSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>}
                                    </ThSearchForm>
                                    {artistSuggestions.length > 0 && (
                                        <ul className="suggestions-list">
                                            {artistSuggestions.map((suggestion, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handleArtistSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </th>
                            <th>
                                <div className="autocomplete-wrapper">
                                    <ThSearchForm onSubmit={handleSubmit}>
                                        <input value={genre} name='genre' onChange={onInputchange} placeholder="Genre" />
                                        {selectedGenres.length > 0
                                            && <button onClick={() => {
                                                setSelectedGenres([]);
                                                setFilterData(prev => ({ ...prev, genre: "" }));
                                                setGenreSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>}
                                    </ThSearchForm>
                                    {genreSuggestions.length > 0 && (
                                        <ul className="suggestions-list">
                                            {selectedGenres.map((suggestion, index) => (
                                                <li className='selected'
                                                    key={index}
                                                    onClick={() => handleGenreSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                            {genreSuggestions.filter((genre => !selectedGenres.includes(genre))).map((suggestion, index) => (
                                                <li className={`${selectedGenres.includes(suggestion) ? "selected" : ""}`}
                                                    key={index}
                                                    onClick={() => handleGenreSuggestionClick(suggestion)}>
                                                    {suggestion}
                                                </li>
                                            ))}
                                            <button className='close-btn' onClick={handleApplyGenre}>
                                                Close
                                            </button>
                                        </ul>
                                    )}
                                </div>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {songs.length > 0 ? <tbody>
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
                    </tbody> : <div className="loader-container"><TitleText >No Song Found</TitleText></div>}
                </Table>
            </Container>
        </PageLayout>
    );
}

export default Songs
