import React from "react";
import { Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";

import MyRoute from "./MyRoute";

import Login from "../pages/Login";
import Alunos from "../pages/Alunos";
import Aluno from "../pages/Aluno";
import Fotos from "../pages/Fotos";
import Page404 from "../pages/Page404";
import Register from "../pages/Register";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
