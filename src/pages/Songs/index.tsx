
import { Song, rootState } from '../../features/interfaces';
import { Table } from '../../components/styled/TableLayout';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { UpdateSongForm } from './updatesSong/UpdateSongForm';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongsRequest } from '../../features/song/songSlice';
import ConfirmModal from './deleteSong/ConfirmModal';
import { TableTitleText } from './components/TitleText';
import { ActionBar, Container, TitleContainer } from './components/Container';
import PageLayout from '../Layout';
import { FilterButton, SearchForm, ThSearchForm } from './components/SearchForm';
import { BiSearchAlt } from 'react-icons/bi';
// import { IoClose } from 'react-icons/io5';
import { FiFilter } from 'react-icons/fi';

const Songs = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state: rootState) => state.songs.songs);

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
    // const [suggestions, setSuggestions] = useState<string[]>([]);
    const [titleSuggestions, setTitleSuggestions] = useState<string[]>([]);
    const [albumSuggestions, setAlbumSuggestions] = useState<string[]>([]);
    const [artistSuggestions, setAritstSuggestions] = useState<string[]>([]);
    const [showFilter, setShowFilter] = useState(false);

    const { title, album, artist } = filterData;

    const titleValues: string[] = [];
    songs.forEach(s => {
        if (!titleValues.includes(s.title)) {
            titleValues.push(s.title)
        }
    });

    const albumValues: string[] = [];
    songs.forEach(s => {
        if (!albumValues.includes(s.album.name)) {
            albumValues.push(s.album.name)
        }
    });

    const artistValues: string[] = [];
    songs.forEach(s => {
        if (!artistValues.includes(s.artist.fname + " " + s.artist.lname)) {
            artistValues.push(s.artist.fname + " " + s.artist.lname)
        }
    });

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
            }
        } else {
            if (name === 'title') {
                setTitleSuggestions([]);
            } else if (name === 'album') {
                setAlbumSuggestions([])
            } else if (name === 'artist') {
                setAritstSuggestions([])
            }
        }
    }
    const handleTitleSuggestionClick = (value: string) => {
        setFilterData(prev => ({
            ...prev,
            title: value
        }))
        setTitleSuggestions([]);
        console.log(filterData)
    };


    const handleAlbumSuggestionClick = (value: string) => {
        setFilterData(prev => ({
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
        setAritstSuggestions([]);
        console.log(filterData)
    };

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
        dispatch(searchSongsRequest(filterData));
    }

    const handleFilter = () => dispatch(searchSongsRequest(filterData));

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(searchSongsRequest(filterData));
    }

    useEffect(() => {
        if (title.length || album.length || artist.length) {
            setShowFilter(true);
        } else {
            setShowFilter(false);
        }
    }, [album.length, artist.length, title.length])

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
                            <BiSearchAlt size={16} />
                        </button>
                        <input ref={searchRef} placeholder="Search here ..." required type="text" />
                    </SearchForm>
                    {showFilter && <FilterButton onClick={handleFilter}>
                        <FiFilter />
                    </FilterButton>}
                </TitleContainer>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <div className="autocomplete-wrapper">
                                    <ThSearchForm onSubmit={handleSubmit}>
                                        <input value={title} name='title' onChange={onInputchange} placeholder="Title" autoComplete='Title' />
                                        {/* {title.length > 0
                                            && <button onClick={() => {
                                                setFilterData(prev => ({ ...prev, title: "" }));
                                                setTitleSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>} */}
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
                                        {/* {album.length > 0
                                            && <button onClick={() => {
                                                setFilterData(prev => ({ ...prev, album: "" }));
                                                setAlbumSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>} */}
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
                                        {/* {artist.length > 0
                                            && <button onClick={() => {
                                                setFilterData(prev => ({ ...prev, artist: "" }));
                                                setAritstSuggestions([]);
                                            }}>
                                                <IoClose size={16} />
                                            </button>} */}
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
                                <ThSearchForm >
                                    <input ref={searchRef} defaultValue="Genre" autoComplete='Genre' />
                                    {/* <button>
                                        <IoClose size={16}/>
                                    </button> */}
                                </ThSearchForm>
                            </th>
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
