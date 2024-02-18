import styled from "@emotion/styled";
import { TitleText } from "../components/TitleText";
import { SubmitButton } from "../../../components/Buttons";
import { useDispatch } from "react-redux";
import { deleteSongRequest, getSongsRequest } from "../../../features/song/songSlice";
import { Song } from "../../../features/interfaces";

interface ModalProp {
    song: Song;
    isOpen: boolean;
    modalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ConfirmModal = ({ modalOpen, isOpen, song }: ModalProp) => {

    const Modal = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    height:100vh;
    z-index:20;
    display:${isOpen ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    background-color:#00000076;
    
    &>div{
        width:24rem;
        border-radius:1rem;
        padding:1rem;
        background-color:#fff;
        box-shadow: 0.5rem 0.5rem 1rem #ffffff68;
        @media only screen and (max-width: 760px) {
            & {
                width:18.5rem;
            }
            }

        div{
            display:flex;
            justify-content:center;
            align-items:center;
            gap:1rem;
        }
    }
`;
    const dispatch = useDispatch();

    const handleCancel = () => {
        modalOpen(false);
    }
    const handleConfirm = () => {
        dispatch(deleteSongRequest(song));
        dispatch(getSongsRequest());
        modalOpen(false);
    }
    return (
        <Modal>
            <div>
                <TitleText>Requesting Confiramtion</TitleText>
                <span>Are you sure you want to delete this song?</span>
                <div>
                    <SubmitButton onclick={handleCancel} color="#7360DF">Cancel</SubmitButton>
                    <SubmitButton onclick={handleConfirm} color="#f80067">Delete</SubmitButton>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmModal