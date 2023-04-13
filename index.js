import express from 'express';
import { buscarUfPorId, buscarUfsFiltrados } from './servicos/servico.js';

const app = express();

app.get('/uf', (req, res) => {
    const filtros = req.query;
  
    // Verificar se algum dos filtros fornecidos não é um campo válido na coleção de UF
    const filtrosValidos = Object.keys(filtros).every((filtro) =>
      ['sigla'].includes(filtro)
    );
  
    if (!filtrosValidos) {
      res.status(400).send('Um ou mais filtros fornecidos são inválidos.');
    } else {
      const resultado = buscarUfsFiltrados(filtros);
      if (resultado.length > 0) {
        res.send(resultado);
      } else {
        res.status(404).send('UF não encontrada');
      }
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
