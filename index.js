import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorSigla } from './servicos/servico.js';

const app = express();

app.get('/uf/', (req, res) => {
  const sigla = req.query.sigla;
  const resultado = sigla ? buscarUfsPorSigla(sigla) : buscarUfs();
  
  if (resultado) {
    res.send(resultado);
  } else {
    res.status(404).send('UF não encontrada');
  }
});

  
  app.get('/uf/:id', (req, res) => {
    const id = req.params.id;
    const resultado = buscarUfPorId(id);

    if (resultado) {
      res.send(resultado);
    } else {
      res.status(404).send('UF não encontrada');
    }
  });
  
  app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});