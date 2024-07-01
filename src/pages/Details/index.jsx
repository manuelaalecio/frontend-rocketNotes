import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequatur error soluta debitis eum praesentium iusto dicta fugiat
            sed hic nisi temporibus distinctio magni tempore dignissimos,
            accusantium vitae ipsam maxime.
          </p>
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
        </Content>
      </main>
    </Container>
  );
}
