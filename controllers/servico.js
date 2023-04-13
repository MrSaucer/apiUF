import { uf } from '../data/dados.js';

// Controlador para buscar todos os estados
export const buscarUfs = (sigla) => {
  let ufs = uf;
  // Verificar se o parâmetro "sigla" foi enviado na requisição
  if (sigla) {
    // Filtrar os estados com base na sigla
    ufs = ufs.filter((uf) => uf.uf === sigla);
  }
  
  // Mapear todos os estados para retornar apenas o ID, UF e nome
  const resultado = ufs.map((uf) => {
    return { id: uf.id, uf: uf.uf, nome: uf.nome, populacao: uf.populacao, capital:uf.capital, principal_ponto_turistico: uf.principal_ponto_turistico };
  });

  return resultado;
};

// Controlador para buscar um estado pelo ID
export const buscarUfPorId = (id) => {
  // Obter o ID a partir dos parâmetros da requisição
  id = parseInt(id);
  // Buscar o estado correspondente ao ID nos dados
  const ufById = uf.find((uf) => uf.id === id);
  
  return ufById;
};
