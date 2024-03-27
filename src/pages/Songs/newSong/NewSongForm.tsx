import React, { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { Song } from '../../../features/interfaces';
import { useDispatch } from 'react-redux';
import { addSongRequest, getSongsRequest } from '../../../features/song/songSlice';
import { TitleText } from '../components/TitleText';
import { Form, FormContainer } from '../components/Form';

interface FormProps {
    isOpen: boolean;
    openForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewSongForm = ({ isOpen, openForm }: FormProps) => {

    const dispatch = useDispatch();

    const titleRef = useRef<HTMLInputElement>(null);
    const albumRef = useRef<HTMLInputElement>(null);
    const artistFnameRef = useRef<HTMLInputElement>(null);
    const artistLnameRef = useRef<HTMLInputElement>(null);
    const genreRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSong: Song = {
            artist: { fname: artistFnameRef.current!.value, lname: artistLnameRef.current!.value },
            title: titleRef.current!.value,
            album: { name: albumRef.current!.value },
            genre: { name: genreRef.current!.value },
        };
        dispatch(addSongRequest(newSong));
        dispatch(getSongsRequest());
        openForm(false);
    };
    return (
        <div>
            {isOpen && (
                <FormContainer isOpen>
                    <button onClick={() => openForm(false)}>
                        <MdClose />
                    </button>
                    <Form onSubmit={onSubmit}>
                        <TitleText>New Song </TitleText>
                        <span>Fill song's informations </span>

                        <label>
                            <input type="text" required name="title" ref={titleRef} />
                            <span>Song title</span>
                        </label>
                        <label>
                            <input type="text" required name="artistName" ref={artistFnameRef} />
                            <span>Artist name</span>
                        </label>
                        <label>
                            <input type="text" required name="artistName" ref={artistLnameRef} />
                            <span>Last name</span>
                        </label>

                        <label>
                            <input type="text" required name="albumName" ref={albumRef} />
                            <span>Album name</span>
                        </label>

                        <label>
                            <input type="text" required name="genre" ref={genreRef} />
                            <span>Song genre</span>
                        </label>
                        <label htmlFor="genres">Country:</label>
                        <input type="text" id="myCountry" name="myCountry" list="countries" />
                        <datalist id="countries">
                            <option value="France" />
                            <option value="Germany" />
                            <option value="Italy" />
                        </datalist>

                        {/* 
                        <span>Upload artist avatar(optional)</span>
                        <label>
                            <input type="file" name="artistAvatar" />
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