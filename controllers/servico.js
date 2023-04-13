import { colecaoUf } from '../data/dados.js';

// Controlador para buscar todos os estados
export const buscarUfs = (sigla) => {
  let ufs = colecaoUf;
  // Verificar se o parâmetro "sigla" foi enviado na requisição
  if (sigla) {
    // Filtrar os estados com base na sigla
    ufs = ufs.filter((uf) => uf.uf === sigla);
  }
  
  // Mapear todos os estados para retornar apenas o ID, UF e nome

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

