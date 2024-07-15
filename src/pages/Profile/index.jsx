import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Avatar>
        <img src="https://github.com/manuelaalecio.png" alt="Foto do usuário" />

        <label htmlFor="avatar">
          <FiCamera />

          <input id="avatar" type="file" />
        </label>
      </Avatar>

      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
