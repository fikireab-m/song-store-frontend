import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Song } from '../../features/interfaces';
import { useDispatch } from 'react-redux';
import { addSongFetch, getSongsFetch } from '../../features/song/songSlice';
import { InputWrapper } from './InputWrapper';

interface FormProps {
    isOpen: boolean;
    closeForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const SongForm = ({ isOpen, closeForm }: FormProps) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        artistName: "",
        albumName: "",
        genre: "",
    });

    const { title, artistName, albumName, genre } = formData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSong: Song = {
            artist: { name: artistName },
            title,
            album: { name: albumName },
            genre,
        };
        dispatch(addSongFetch(newSong));
    };

    useEffect(() => {
        dispatch(getSongsFetch());
    }, [dispatch]);

    const FormContainer = styled.div`
    position:fixed;
    top:0.5rem;;
    right:0;
    width:100%;
    height:100vh;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0.25em 0.25em 1em rgba(0,0,0,0.3);
    z-index: 10;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.5s ease-in-out;

    @media (min-width: 768px) {
      width: 28rem;
    }
    &>button{
        margin-top:1rem;
        margin-left:1rem;
        width:2rem;
        height:2rem;
        font-size:1.5rem;
        color: #7360DF;
        border-radius:50%;
        padding:0.25rem;
        background: none;
        cursor:pointer;
        border:none;
        transition: all .3s ease;

        &:hover{
            background:#910050;
            color:white;
        }
        }
  `;

    const FormContent = styled.form`
    background-color: #fff;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap:0.2rem;
  `;

    const Label = styled.label`
    display: block;
    font-size:1rem;
    font-weight: 300;
    margin-top: 0.5rem;
  `;

    return (
        <div>
            {isOpen && (
                <FormContainer>
                    <button onClick={() => closeForm(false)}>
                        <MdClose />
                    </button>
                    <FormContent onSubmit={handleSubmit}>
                        <Label htmlFor="songTitle">Song Title</Label>
                        <InputWrapper>
                            <input
                                type="text" id="songTitle" name="title"
                                value={title} onChange={handleInputChange} />
                        </InputWrapper>

                        <Label htmlFor="albumName">Album Name</Label>
                        <InputWrapper>
                            <input type="text" id="albumName" name="albumName"
                                value={albumName} onChange={handleInputChange} />
                        </InputWrapper>

                        <Label htmlFor="artistName">Artist Name</Label>
                        <InputWrapper>
                            <input type="text" id="artistName" name="artistName"
                                value={artistName} onChange={handleInputChange} />
                        </InputWrapper>

                        <Label htmlFor="genre">Artist Name</Label>
                        <InputWrapper>
                            <input type="text" id="genre" name="genre"
                                value={genre} onChange={handleInputChange} />
                        </InputWrapper>
                    </FormContent>
                </FormContainer>
            )}
        </div>
    )
}