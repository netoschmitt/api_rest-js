import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Agnelo',
      sobrenome: 'Neto',
      email: 'agneloneto@gmail.com',
      idade: 39,
      peso: 98,
      altura: 1.87,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
