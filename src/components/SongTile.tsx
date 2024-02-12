import styled from "@emotion/styled"
import { Song } from "../features/interfaces"
import { IoIosMusicalNote } from "react-icons/io"

const Ul = styled.ul`
    list-style: none;
    width:95%;
    padding:0 0.4rem;
    margin:0.5rem 0;
    li{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        background-color:#7360df18;
        margin-top:1px;
        border-radius:0.5re,;

        &>span{
            font-size:1.5rem;
            border-radius:50%;
            color:#7360df;
            margin-right:0.5rem;
        }
        div{
            color:grey;
            h6{
            font-weight:600;
            font-size:1rem;
            padding:0;
            margin:0;
        }
        span{
            font-size:1rem;
        }
        }
    }
`
const SongTile = ({ song }: { song: Song }) => {
    return (
        <Ul>
            <li>
                <span>
                    <IoIosMusicalNote />
                </span>
                <div>
                    <h6>{song.title}</h6>
                    <span>{song.artist.name}</span>
                </div>
            </li>
        </Ul>
    )
}

export default SongTile