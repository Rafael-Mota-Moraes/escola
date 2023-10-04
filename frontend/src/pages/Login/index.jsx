import React, { useEffect } from "react";
import { Paragrafo, Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";

import axios from "../../services/axios";

export default function Login() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get("/alunos");
      const { data } = response;
      console.log(data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title isRed={false}>
        Login <small>Olá</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
