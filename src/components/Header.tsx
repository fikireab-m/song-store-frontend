import styled from '@emotion/styled'
import { FaPlus } from "react-icons/fa";

interface HeaderProps {
    openForm: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchForm = styled.form`
position: relative;
width: 16rem;
height: 2.75rem;
display: flex;
align-items: center;
padding-inline: 0.8rem;
border-radius: 1rem;
transition: border-radius 0.5s ease;
background: whitesmoke;

&>button{
    border: none;
    background: none;
    color: #7360DF;
}
&>input{
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;

    &:focus {
        outline: none;
      }
}
&:before{
    content: "";
    position: absolute;
    background: #7360DF;
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform .3s ease;
}
&:focus-within{
    border-radius: 1px;
}
&:focus-within:before {
    transform: scale(1);
  }
  &>svg {
    width: 1.5rem;
    margin-top: 3px;
  }  
`
const HeaderComp = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width:100%;
gap:1rem;
padding:0 2rem;

&>button{
    width:2.5rem;
    height:2.5rem;
    color: #7360DF;
    border-radius:50%;
    padding:0.5rem;
    background: none;
    border:2px solid #7360DF;
    cursor:pointer;
    transition: all .3s ease;

    &:hover{
        background:#7360DF;
        color:white;
    }
}
`
const Header = ({ openForm }: HeaderProps) => {
    return (
        <HeaderComp>
            <SearchForm >
                <button>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <input placeholder="Search here ..." required type="text" />
            </SearchForm>
            <button onClick={() => openForm(true)}>
                <FaPlus />
            </button>
        </HeaderComp>
    )
}

export default Header