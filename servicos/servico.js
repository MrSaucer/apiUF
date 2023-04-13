import { colecaoUf } from '../dados/dados.js';

export const buscarUfs = () => {
  return colecaoUf;
}

export const buscarUfsPorSigla = (sigla) => {
  const ufsFiltradas = colecaoUf.filter((uf) => uf.sigla === sigla);
  return ufsFiltradas.length > 0 ? ufsFiltradas : null; // retorna null caso não haja UF's com a sigla informada
};

export const buscarUfPorId = (id) => {
  const ufId = parseInt(id);
  const ufById = colecaoUf.find((uf) => uf.id === ufId);
  return ufById;
}
