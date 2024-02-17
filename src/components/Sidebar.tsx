import { GoHome } from "react-icons/go";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { Divider } from "./styled/Divider";
import { Link } from "react-router-dom";
import { SidebarComp, SidebarHeader, SidebarButton } from "./styled/SidebarComponents";


const Sidebar = ({ pageIndex }: { pageIndex: number }) => {
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
    ];

    return (
        <SidebarComp>
            <SidebarHeader>
                <img src="/icon.svg" alt="logo" />
                <span>Melody-Mall</span>
            </SidebarHeader>
            <Divider />
            {
                routes.map((route, index) => (
                    <Link to={route.url} style={{ textDecoration: "none" }} key={index}>
                        <SidebarButton key={index} isActive={index === pageIndex}>
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