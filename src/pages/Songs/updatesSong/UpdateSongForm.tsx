import React, { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { Song } from '../../../features/interfaces';
import { useDispatch } from 'react-redux';
import { getSongsRequest, updateSongRequest } from '../../../features/song/songSlice';
import { TitleText } from '../components/TitleText';
import { Form, FormContainer } from '../components/Form';

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
                <FormContainer isOpen>
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