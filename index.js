import express from 'express';
import { buscarUfPorId, buscarUfsFiltrados } from './servicos/servico.js';

const app = express();


app.get('/uf', (req, res) => {
    const filtros = req.query;
    const ufsFiltrados = buscarUfsFiltrados(filtros);
    if (ufsFiltrados) {
      res.send(ufsFiltrados);
    } else {
      res.status(404).send('UF não encontrada');
    }
  });
  

// Rota para buscar um estado pelo ID
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
