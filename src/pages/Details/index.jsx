import { Container, Links } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota" />
      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">www.rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">www.rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title={"express"} />
        <Tag title={"nodejs"} />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
