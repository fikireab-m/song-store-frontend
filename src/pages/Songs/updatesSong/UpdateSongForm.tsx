import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Song } from '../../../features/interfaces';
import { useDispatch } from 'react-redux';
import { getSongsRequest, updateSongRequest } from '../../../features/song/songSlice';
import { TitleText } from '../components/TitleText';
import { Form } from '../components/Form';

interface FormProps {
    song: Song;
    isOpen: boolean;
    formOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateSongForm = ({ isOpen, formOpen, song }: FormProps) => {

    const FormContainer = styled.div`
    position:fixed;
    width:28rem;
    top:0.5rem;;
    right:0;
    min-height:100svh;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: -4rem 0 32rem rgba(0,0,0,0.5);
    z-index: 20;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.5s ease-in-out;

    @media only screen and (max-width: 760px) {
    & {
        width:100%;
        top:0;
    }
  }
    &>button{
        margin:1rem;
        font-size:2rem;
        color: #7360DF;
        background: none;
        cursor:pointer;
        border:none;
        transition: all .3s ease;

        &:hover{
            font-weight:bolder;
            color: #ff0062d6;
            transform:scale(1.25);
        }
        }
  `;
    const dispatch = useDispatch();

    const titleRef = useRef<HTMLInputElement>(null);
    const albumRef = useRef<HTMLInputElement>(null);
    const artistRef = useRef<HTMLInputElement>(null);
    const genreRef = useRef<HTMLInputElement>(null);

    const { title, album, artist, genre } = song;
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSong: Song = {
            _id: song._id,
            artist: { name: artistRef.current!.value },
            title: titleRef.current!.value,
            album: { name: albumRef.current!.value },
            genre: genreRef.current!.value,
        };
        dispatch(updateSongRequest(newSong));
        dispatch(getSongsRequest());
        formOpen(false);
    };

    return (
        <div>
            {isOpen && (
                <FormContainer>
                    <button onClick={() => formOpen(false)}>
                        <MdClose />
                    </button>
                    <Form onSubmit={onSubmit}>
                        <TitleText>Update Song </TitleText>
                        &nbsp;
                        <label>
                            <input type="text" required name="title" ref={titleRef} defaultValue={title} />
                            <span>Song title</span>
                        </label>
                        <label>
                            <input type="text" required name="artistName" ref={artistRef} defaultValue={artist.name} />
                            <span>Artist name</span>
                        </label>

                        <label>
                            <input type="text" required name="albumName" ref={albumRef} defaultValue={album.name} />
                            <span>Album name</span>
                        </label>

                        <label>
                            <input type="text" required name="genre" ref={genreRef} defaultValue={genre} />
                            <span>Song genre</span>
                        </label>

                        <button >Save</button>
                    </Form>
                </FormContainer>
            )}
        </div>
    )
}