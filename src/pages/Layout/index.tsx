import styled from "@emotion/styled"
import SidebarMenuButton from "../../components/widgets/SidebarMenuButton"
import { GoHome } from "react-icons/go";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";

const GridLayout = styled.div`
display: grid;
grid-template-areas:
  'sidemenu header header header header header header header header'
  'sidemenu main main main main main main right right';
gap: 10px;
`
const HeaderContainer = styled.div`
height:2rem;
grid-area: header;
background-color: white;
box-shadow: 0 2px 2px gray;
`
const SidebarHeader = styled.div`
width:100%;
padding:1rem 0.5rem;
display:flex;
align-items:center;
gap:0.5rem;
color:#7360DF;
font-size:1.2rem;

&>img{
    height:2.5rem;
}

`
const SidebarContainer = styled.div`
max-width:max-content;
grid-area: sidemenu;
background-color: whiteSmoke;
box-shadow: 0 2px 2px gray;
`
const MainContainer = styled.div`
grid-area: main;
height: max-content;
background-color: white;
`
const RightSide = styled.div`
width:16rem;
grid-area: right;
background-color: white;
box-shadow: 0 2px 2px gray;
`

const PageLayout = () => {
    return (
        <div>
            <GridLayout>
                <HeaderContainer>Header</HeaderContainer>
                <SidebarContainer>
                    <SidebarHeader>
                        <img src="./public/icon.svg" alt="logo" />
                        <span>Melody-Mall</span>
                    </SidebarHeader>
                    <SidebarMenuButton isActive={true} >
                        <GoHome />
                        <span>Home</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton>
                        <CiMusicNote1 />
                        <span>Songs</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton >
                        <IoAlbumsOutline />
                        <span>Albums</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton >
                        <BsSoundwave />
                        <span>Genres</span>
                    </SidebarMenuButton>
                </SidebarContainer>
                <MainContainer>
                    <h1>Content</h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat beatae incidunt consequatur aliquam. Nam, facere obcaecati cum nulla voluptate ad sequi nisi in repellat mollitia modi ab animi magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quasi maiores iusto quia eos, illo nobis consequatur minima impedit, repudiandae soluta nulla beatae corporis dolor possimus tempore laboriosam. Hic.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsam magnam et obcaecati perferendis impedit quia tenetur in officia harum blanditiis cum soluta, nulla unde quas alias. Ipsa, facilis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse quibusdam laudantium quas autem veritatis vitae, veniam dignissimos, distinctio nemo error rerum corporis reiciendis voluptates iusto voluptate et vero quidem!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat beatae incidunt consequatur aliquam. Nam, facere obcaecati cum nulla voluptate ad sequi nisi in repellat mollitia modi ab animi magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quasi maiores iusto quia eos, illo nobis consequatur minima impedit, repudiandae soluta nulla beatae corporis dolor possimus tempore laboriosam. Hic.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsam magnam et obcaecati perferendis impedit quia tenetur in officia harum blanditiis cum soluta, nulla unde quas alias. Ipsa, facilis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse quibusdam laudantium quas autem veritatis vitae, veniam dignissimos, distinctio nemo error rerum corporis reiciendis voluptates iusto voluptate et vero quidem!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat beatae incidunt consequatur aliquam. Nam, facere obcaecati cum nulla voluptate ad sequi nisi in repellat mollitia modi ab animi magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione quasi maiores iusto quia eos, illo nobis consequatur minima impedit, repudiandae soluta nulla beatae corporis dolor possimus tempore laboriosam. Hic.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsam magnam et obcaecati perferendis impedit quia tenetur in officia harum blanditiis cum soluta, nulla unde quas alias. Ipsa, facilis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse quibusdam laudantium quas autem veritatis vitae, veniam dignissimos, distinctio nemo error rerum corporis reiciendis voluptates iusto voluptate et vero quidem!
                </MainContainer>
                <RightSide>Right</RightSide>
            </GridLayout>
        </div>
    )
}

export default PageLayout