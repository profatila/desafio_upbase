const express = require('express');
const cors =    require('cors')
const app =     express();


app.use(cors())
app.use(express.json())

const alunoRota = require('./controller/aluno')
app.use('/aluno', alunoRota)

const port = process.env.PORT || 3306;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});

