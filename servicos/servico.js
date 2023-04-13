import { colecaoUf } from '../dados/dados.js';


export const buscarUfsFiltrados = (filtros) => {
  let ufs = colecaoUf;
  if (filtros) {
    // Verificar se o parâmetro "sigla" foi enviado nos filtros
    if (filtros.sigla) {
      // Verificar se a sigla informada é válida
      const ufValida = colecaoUf.some((uf) => uf.sigla === filtros.sigla);
      if (!ufValida) {
        return null; // retorna null caso a sigla informada seja inválida
      }
      // Filtrar os estados com base na sigla
      ufs = ufs.filter((uf) => uf.sigla === filtros.sigla);
    }
    // Verificar se o parâmetro "nome" foi enviado nos filtros
    if (filtros.nome) {
      // Filtrar os estados com base no nome
      ufs = ufs.filter((uf) => uf.nome === filtros.nome);
    }
  }
  return ufs;
};

// Controlador para buscar um estado pelo ID
export const buscarUfPorId = (id) => {
  // Converter o parâmetro "id" para o tipo "number"
  const ufId = parseInt(id);

  // Buscar o estado correspondente ao ID nos dados
  const ufById = colecaoUf.find((uf) => uf.id === ufId);

  return ufById;
};
