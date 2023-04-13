import express from 'express';
import { buscarUfs, buscarUfPorId } from './controllers/servico.js';

const app = express();

// Rota para buscar todos os estados
app.get('/uf', (req, res) => {
  const sigla = req.query.sigla;
  const resultado = buscarUfs(sigla);
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send('Sigla não encontrada');
  }
});

// Rota para buscar um estado pelo ID
app.get('/uf/:id', (req, res) => {
  const id = req.params.id;
  const resultado = buscarUfPorId(id);
  if (resultado) {
    res.json(resultado);
  } else {
    res.status(404).send('UF não encontrada');
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});
