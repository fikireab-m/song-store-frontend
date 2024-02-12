import SidebarMenuButton from "./SidebarMenuButton"
import { GoHome } from "react-icons/go";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import styled from "@emotion/styled";
import { Divider } from "./Divider";

const SidebarHeader = styled.div`
padding-top:1rem;
display:flex;
align-items:center;
gap:0.5rem;
color:#7360DF;
font-size:1.2rem;

img{
    height:2.5rem;
}
`
const Sidebar = () => {
    return (
        <>
            <SidebarHeader>
                <img src="/icon.svg" alt="logo" />
                <span>Melody-Mall</span>
            </SidebarHeader>
            <Divider />
            <SidebarMenuButton >
                <GoHome />
                <span>Home</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
                <CiMusicNote1 />
                <span>Songs</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
                <FiUsers />
                <span>Artists</span>
            </SidebarMenuButton>
            <SidebarMenuButton >
                <IoAlbumsOutline />
                <span>Albums</span>
            </SidebarMenuButton>
            <SidebarMenuButton >
                <BsSoundwave />
                <span>Genres</span>
            </SidebarMenuButton>
        </>
    )
}

export default Sidebar