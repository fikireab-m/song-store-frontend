import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import { Song } from '../../../features/interfaces';
import { useDispatch } from 'react-redux';
import { updateSongFetch } from '../../../features/song/songSlice';

interface FormProps {
    song: Song;
    isOpen: boolean;
    formOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateSongForm = ({ isOpen, formOpen, song }: FormProps) => {
    const dispatch = useDispatch();

    const titleRef = useRef<HTMLInputElement>(null);
    const albumRef = useRef<HTMLInputElement>(null);
    const artistRef = useRef<HTMLInputElement>(null);
    const genreRef = useRef<HTMLInputElement>(null);

    const { _id, title, album, artist, genre } = song;
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSong: Song = {
            _id: _id,
            artist: { name: artistRef.current!.value },
            title: titleRef.current!.value,
            album: { name: albumRef.current!.value },
            genre: genreRef.current!.value,
        };
        dispatch(updateSongFetch(newSong));
        formOpen(false);
    };

    const FormContainer = styled.div`
    position:fixed;
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

    @media (min-width: 768px) {
      width: 28rem;
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

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        max-width: 350px;
        padding: 0 2rem;
        position: relative;

        label{
            position: relative;

            &>input{
                width: 100%;
                padding: 0.75rem 1rem;
                outline: 0;
                border: 1px solid #7360df63;
                border-radius: 0.75rem;

                &:focus{
                    border: 1px solid #7360df;
                }
            }
            &>span{
                position: absolute;
                left: 0.75rem;
                top: 0.75rem;
                color: grey;
                font-size: 0.9rem;
                cursor: text;
                transition: 0.3s ease;
            }
            input:placeholder-shown + span {
                top: 1rem;
                font-size: 0.9em;
            }
            input:focus + span,.form label .input:valid + span {
                top: 0;
                font-size: 0.6rem;
                font-weight: 500;
            }
            input:valid + span {
                top: 0;
                font-size: 0.6rem;
                color: green;
            }
        }

        button {
            width: 100%;
            border: none;
            outline: none;
            background-color: #7360DF;
            padding: 0.75rem;
            border-radius: 0.75rem;
            color: #fff;
            font-size: 16px;
            margin-top:1rem;
            transform: .3s ease;

            &:hover {
            background-color: #60a2df;
            cursor: pointer;
                }
            }

        @keyframes pulse {
        from {
            transform: scale(1);
            opacity: 1;
        }

        to {
            transform: scale(2);
            opacity: 0;
        }
        }
  `;

    const TitleText = styled.span`
        font-size: 2rem;
        color: #7360df;
        font-weight: 600;
        letter-spacing: -1px;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 2rem;

        &::before, &::after {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        border-radius: 50%;
        left: 0px;
        background-color: #7360df;
        }

        &::before {
        width: 18px;
        height: 18px;
        background-color: #7360df;
        }

        &::after {
        width: 18px;
        height: 18px;
        animation: pulse 3s linear infinite;
        }
`;
    return (
        <div>
            {isOpen && (
                <FormContainer>
                    <button onClick={() => formOpen(false)}>
                        <MdClose />
                    </button>
                    <Form onSubmit={onSubmit}>
                        <TitleText>Update Song </TitleText>

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