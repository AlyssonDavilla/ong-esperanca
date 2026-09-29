// Gerenciamento de Persistência no LocalStorage

export function salvarVoluntario(dadosVoluntario) {
  const voluntarios = JSON.parse(localStorage.getItem('ong_voluntarios')) || [];
  voluntarios.push(dadosVoluntario);
  localStorage.setItem('ong_voluntarios', JSON.stringify(voluntarios));
}

export function obterVoluntarios() {
  return JSON.parse(localStorage.getItem('ong_voluntarios')) || [];
}