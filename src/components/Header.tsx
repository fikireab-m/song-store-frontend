import { FaPlus } from "react-icons/fa";
import { HeaderComp } from './styled/HeaderComponents';

interface HeaderProps {
    openForm: React.Dispatch<React.SetStateAction<boolean>>;
    page: string;
}


const Header = ({ openForm, page }: HeaderProps) => {
    return (
        <HeaderComp>
            <span>{page}</span>
            <button onClick={() => openForm(true)}>
                <FaPlus />
            </button>
        </HeaderComp>
    )
}

export default Header