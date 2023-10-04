import React from "react";
import { useDispatch } from "react-redux";

import { Paragrafo, Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import * as exempleActions from "../../store/modules/example/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exempleActions.clicaBotaoRequest());

    console.log("Botão clicado");
  }

  return (
    <Container>
      <Title isRed={false}>
        Login <small>Olá</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
