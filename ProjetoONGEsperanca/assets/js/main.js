// ==========================================
// ONG ESPERANÇA - LÓGICA PRINCIPAL (SPA & DOM)
// ==========================================

// 1. Dados dos Projetos da ONG
const projetosData = [
  {
    id: 1,
    titulo: "Campanha de Alimentos",
    badge: "Urgente",
    badgeClass: "badge-urgent",
    desc: "Arrecadação de cestas básicas para famílias em situação de extrema vulnerabilidade social.",
    img: "assets/img/voluntarios.jpg",
    btnText: "Quero Doar",
    btnClass: "btn-accent"
  },
  {
    id: 2,
    titulo: "Reforço Escolar",
    badge: "Educação",
    badgeClass: "badge-info",
    desc: "Aulas de apoio pedagógico e alfabetização para crianças da comunidade local.",
    img: "assets/img/voluntarios.jpg",
    btnText: "Ser Voluntário",
    btnClass: "btn-accent"
  },
  {
    id: 3,
    titulo: "Atendimento Comunitário",
    badge: "Saúde",
    badgeClass: "badge-info",
    desc: "Triagem e apoio emocional promovido por profissionais parceiros da ONG.",
    img: "assets/img/voluntarios.jpg",
    btnText: "Saber Mais",
    btnClass: "btn-accent"
  }
];

// 2. Persistência de Dados (localStorage)
function salvarVoluntario(dados) {
  const voluntarios = JSON.parse(localStorage.getItem('ong_voluntarios')) || [];
  voluntarios.push(dados);
  localStorage.setItem('ong_voluntarios', JSON.stringify(voluntarios));
}

// 3. Template do Cartão de Projeto
function createProjectCardTemplate(projeto) {
  const imgTag = projeto.img 
    ? `<img src="${projeto.img}" alt="${projeto.titulo}" loading="lazy" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px; margin-bottom: 0.75rem;">` 
    : '';

  return `
    <article class="card" style="flex: 1 1 300px; max-width: 380px; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; padding: 1.25rem; background: var(--card-bg, #fff); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <div>
        ${imgTag}
        <span class="badge ${projeto.badgeClass}">${projeto.badge}</span>
        <h3 style="margin: 0.5rem 0; font-size: 1.2rem;">${projeto.titulo}</h3>
        <p style="font-size: 0.9rem; color: #4a5568; line-height: 1.4;">${projeto.desc}</p>
      </div>
      <button class="btn ${projeto.btnClass || 'btn-accent'} project-btn" aria-label="Saber mais sobre ${projeto.titulo}" style="margin-top: 1rem; width: 100%; padding: 0.6rem; cursor: pointer;">${projeto.btnText}</button>
    </article>
  `;
}

// 4. Renderização da Visão Início/Projetos
function renderInicioView() {
  return `
    <div style="width: 100%; max-width: 1200px; margin: 0 auto;">
      <h2 class="section-title" id="projetos" style="margin-bottom: 1.5rem; text-align: left;">Nossas Iniciativas de Impacto</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: flex-start; align-items: stretch; width: 100%;">
        ${projetosData.map(createProjectCardTemplate).join('')}
      </div>
    </div>
  `;
}

// 5. Renderização da Visão Formulário
function renderCadastroView() {
  return `
    <section class="form-section" id="cadastro" style="width: 100%; max-width: 700px; margin: 0 auto;">
      <h2>Formulário de Registo de Voluntário</h2>
      <p>Preencha os seus dados para fazer parte da nossa rede solidária.</p><br>

      <form id="volunteerForm">
        <fieldset style="border: 1px solid var(--border-color, #cbd5e1); padding: 1.2rem; border-radius: 8px; margin-bottom: 1rem;">
          <legend style="font-weight: bold; padding: 0 0.5rem;">Dados Pessoais</legend>
          
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="nome" style="display: block; margin-bottom: 0.3rem;">Nome Completo:</label>
            <input type="text" id="nome" class="form-control" placeholder="Digite o seu nome" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="cpf" style="display: block; margin-bottom: 0.3rem;">CPF (Formato: 000.000.000-00):</label>
            <input type="text" id="cpf" class="form-control" placeholder="000.000.000-00" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
          </div>
        </fieldset>

        <fieldset style="border: 1px solid var(--border-color, #cbd5e1); padding: 1.2rem; border-radius: 8px; margin-bottom: 1rem;">
          <legend style="font-weight: bold; padding: 0 0.5rem;">Informações de Contacto & Localização</legend>
          
          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="email" style="display: block; margin-bottom: 0.3rem;">E-mail:</label>
            <input type="email" id="email" class="form-control" placeholder="seuemail@dominio.com" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="tel" style="display: block; margin-bottom: 0.3rem;">Telefone / Telemóvel:</label>
            <input type="tel" id="tel" class="form-control" placeholder="(11) 99999-9999" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label for="cep" style="display: block; margin-bottom: 0.3rem;">CEP (Formato: 00000-000):</label>
            <input type="text" id="cep" class="form-control" placeholder="00000-000" required style="width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
          </div>
        </fieldset>

        <button type="submit" class="btn btn-accent" style="margin-top: 1rem; width: 100%; padding: 0.75rem; font-size: 1rem; cursor: pointer;">Concluir Registo</button>
      </form>
    </section>
  `;
}

// 6. Roteador SPA (hashchange)
function handleNavigation() {
  const hash = window.location.hash;
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  if (hash === '#cadastro') {
    appContainer.innerHTML = renderCadastroView();
    if (window.IMask) {
      const cpf = document.getElementById('cpf');
      const tel = document.getElementById('tel');
      const cep = document.getElementById('cep');
      if (cpf) IMask(cpf, { mask: '000.000.000-00' });
      if (tel) IMask(tel, { mask: '(00) 00000-0000' });
      if (cep) IMask(cep, { mask: '00000-000' });
    }
    setupFormListener();
  } else {
    appContainer.innerHTML = renderInicioView();
  }
}

// 7. Eventos do Formulário e Componentes Sobrepostos
function setupFormListener() {
  const form = document.getElementById('volunteerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dados = {
      nome: document.getElementById('nome').value,
      cpf: document.getElementById('cpf').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      cep: document.getElementById('cep').value,
      dataRegistro: new Date().toISOString()
    };

    salvarVoluntario(dados);

    const toast = document.querySelector('.toast');
    if (toast) {
      toast.style.display = 'flex';
      setTimeout(() => toast.style.display = 'none', 4000);
    }

    form.reset();
  });
}

// Event Listeners Globais para Modais e Atanchas de Teclado
document.addEventListener('click', (e) => {
  if (e.target.matches('.project-btn')) {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.style.display = 'flex';
  }
  if (e.target.matches('#closeModalBtn')) {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal-overlay');
    if (modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  }
});

window.addEventListener('hashchange', handleNavigation);
window.addEventListener('DOMContentLoaded', handleNavigation);