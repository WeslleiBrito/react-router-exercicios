import { HeaderContainer, ButtonPages } from "./style";
import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile } from "../../Routes/coorditator";

export const HeaderPage = () => {
    const navigate = useNavigate()

    return(
        <HeaderContainer>
            <ButtonPages onClick={() => goToHome(navigate)}>Home</ButtonPages>
            <ButtonPages onClick={() => goToProfile(navigate)}>Perfil</ButtonPages>
        </HeaderContainer>
    )
} 