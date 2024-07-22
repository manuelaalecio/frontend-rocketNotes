import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { singOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/manuelaalecio.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Manuela Alecio</strong>
        </div>
      </Profile>

      <Logout onClick={singOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
