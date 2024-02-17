import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Song } from '../../../features/interfaces';
import { useDispatch } from 'react-redux';
import { addSongRequest, getSongsRequest } from '../../../features/song/songSlice';
import { TitleText } from '../components/TitleText';
import { Form } from '../components/Form';

interface FormProps {
    isOpen: boolean;
    openForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewSongForm = ({ isOpen, openForm }: FormProps) => {


    const FormContainer = styled.div`
    position:fixed;
    width: 28rem;
    top:0.5rem;;
    right:0;
    min-height:100vh;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: -4rem 0 32rem rgba(0,0,0,0.5);
    z-index: 10;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.5s ease-in-out;

    @media only screen and (max-width: 660px)  {
        &{
            width:100%;
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

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSong: Song = {
            artist: { name: artistRef.current!.value },
            title: titleRef.current!.value,
            album: { name: albumRef.current!.value },
            genre: genreRef.current!.value,
        };
        dispatch(addSongRequest(newSong));
        dispatch(getSongsRequest());
        openForm(false);
    };
    return (
        <div>
            {isOpen && (
                <FormContainer>
                    <button onClick={() => openForm(false)}>
                        <MdClose />
                    </button>
                    <Form onSubmit={onSubmit}>
                        <TitleText>New Song </TitleText>
                        <span>Fill necessary song informations </span>

                        <label>
                            <input type="text" required name="title" ref={titleRef} />
                            <span>Song title</span>
                        </label>
                        <label>
                            <input type="text" required name="artistName" ref={artistRef} />
                            <span>Artist name</span>
                        </label>

                        <label>
                            <input type="text" required name="albumName" ref={albumRef} />
                            <span>Album name</span>
                        </label>

                        <label>
                            <input type="text" required name="genre" ref={genreRef} />
                            <span>Song genre</span>
                        </label>
{/* 
                        <span>Upload aritst avatar(optional)</span>
                        <label>
                            <input type="file" name="atistAvatar" />
                        </label>
                        <span>Upload album art(optional)</span>
                        <label>
                            <input type="file" name="albumArt" />
                        </label> */}

                        <button >Submit</button>
                    </Form>
                </FormContainer>
            )}
        </div>
    )
}