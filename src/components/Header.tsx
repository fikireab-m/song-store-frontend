import { FaPlus } from "react-icons/fa";
import { HeaderComp } from './styled/HeaderComponents';

interface HeaderProps {
    openForm: React.Dispatch<React.SetStateAction<boolean>>;
}


const Header = ({ openForm }: HeaderProps) => {
    return (
        <HeaderComp>
            <button onClick={() => openForm(true)}>
                <FaPlus />
            </button>
        </HeaderComp>
    )
}

export default Header