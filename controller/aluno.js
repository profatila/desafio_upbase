const Aluno = require('../models/cadastro');

const criarUsuario = async (req, res) => {
  const { nome, usuario, email, senha } = req.body;

  try {
    // Verifica se o usuário já está no banco
    const usuarioExistente = await Aluno.findOne({
      where: { usuario }
    });

    // Verifica se o email já está no banco
    const emailExistente = await Aluno.findOne({
      where: { email }
    });

    // Verifica e retorna erro se já existir o usuario ou o email
    if (usuarioExistente) {
      return res.status(400).json('Nome de usuário já está em uso.');
    }

    if (emailExistente) {
      return res.status(400).json('Endereço de email já está em uso.');
    }

    // Cria um novo aluno
    const novoAluno = await Aluno.create({ nome, usuario, email, senha });

    // Retor
    return res.status(200).json(novoAluno);


  } catch (error) {
    // retorna um  erro
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json('Erro ao criar usuário.');
  }
};

module.exports = criarUsuario;
