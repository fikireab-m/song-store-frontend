import { GoHome } from "react-icons/go";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import styled from "@emotion/styled";
import { Divider } from "./Divider";
import { Link } from "react-router-dom";

const SidebarComp = styled.div`    
    width:14rem;
    height:100vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    @media only screen and (max-width: 760px)  {
        &{
            width:3.5rem;
        }
    }
`
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
    @media only screen and (max-width: 760px)  {
        span{
            display:none;
        }
    }
`;

export const SidebarButton = styled.button`
width: 12rem;
height: 2.5rem;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.5rem;
padding: 0px 1rem;
margin: 0.25rem 0.75rem;
border-radius: 0.5rem;
border: none;
position: relative;
font-size:1rem;
cursor: pointer;
background:whiteSmoke;
transition-duration: .5s;
&>div{
    position: absolute;
    right: 0;
    width: 1.9rem;
    height: 100%;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media only screen and (max-width: 760px)  {
        &{
            width:3rem;
            height: 3rem;
            margin: 0.25 0;

            div,span{
            display:none;
        }

        }
    }


&:hover{
    background:#7360DF;
    color:white;
    letter-spacing:5px;
    transition-duration: .5s;
}
&:active{
    background:#7360DF;
    color:white;
    letter-spacing:5px;
    transition-duration: .5s;
}
`;
const Sidebar = () => {
    const routes = [
        {
            name: "Home",
            url: "/",
            icon: <GoHome />
        },
        {
            name: "Songs",
            url: "/songs",
            icon: <CiMusicNote1 />
        },
        {
            name: "Artists",
            url: "/artists",
            icon: <FiUsers />
        },
        {
            name: "Albums",
            url: "/albums",
            icon: <IoAlbumsOutline />
        },
        {
            name: "Genres",
            url: "/genres",
            icon: <BsSoundwave />
        },
    ]
    return (
        <SidebarComp>
            <SidebarHeader>
                <img src="/icon.svg" alt="logo" />
                <span>Melody-Mall</span>
            </SidebarHeader>
            <Divider />
            {
                routes.map((route, index) => (
                    <Link to={route.url} style={{ textDecoration: "none" }}>
                        <SidebarButton key={index}>
                            {route.icon}
                            <span>{route.name}</span>
                            <div>›</div>
                        </SidebarButton>
                    </Link>
                ))
            }
        </SidebarComp>
    )
}

export default Sidebar