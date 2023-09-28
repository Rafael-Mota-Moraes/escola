import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Moreira',
      email: 'rafa@email.com',
      idade: 18,
      peso: 90.35,
      altura: 1.65,
    });
    res.json({ aluno: novoAluno });
  }
}

export default new HomeController();
