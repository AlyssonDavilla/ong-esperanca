// Roteamento Single Page Application (SPA) e Renderização Dinâmica

const projetosData = [
  { id: 1, titulo: "Campanha de Alimentos", badge: "Urgente", badgeClass: "badge-urgent", desc: "Arrecadação de cestas básicas para famílias em extrema vulnerabilidade.", img: "assets/img/voluntarios.jpg" },
  { id: 2, titulo: "Reforço Escolar", badge: "Educação", badgeClass: "badge-info", desc: "Aulas de apoio pedagógico e alfabetização comunitária.", img: "assets/img/voluntarios.jpg" },
  { id: 3, titulo: "Atendimento Comunitário", badge: "Saúde", badgeClass: "badge-info", desc: "Triagem e apoio emocional promovido por profissionais voluntários.", img: "assets/img/voluntarios.jpg" }
];

function createProjectCardTemplate(projeto) {
  return `
    <article class="card">
      <div>
        <img src="${projeto.img}" alt="${projeto.titulo}" style="width: 100%; border-radius: 6px; margin-bottom: 0.5rem;">
        <span class="badge ${projeto.badgeClass}">${projeto.badge}</span>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.desc}</p>
      </div>
      <button class="btn btn-accent project-btn" data-id="${projeto.id}" style="margin-top: var(--spacing-sm);">Apoiar Projeto</button>
    </article>
  `;
}

export function renderInicioView() {
  return `
    <h2 class="section-title">Iniciativas e Impacto Social</h2>
    <div class="grid-projects" id="projetos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
      ${projetosData.map(createProjectCardTemplate).join('')}
    </div>
  `;
}

export function renderCadastroView() {
  return `
    <section class="form-section">
      <h2>Formulário de Registo de Voluntário</h2>
      <p>Preencha os seus dados para fazer parte da nossa rede solidária.</p><br>

      <form id="volunteerForm">
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div class="form-group">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" class="form-control" placeholder="Digite o seu nome" required>
          </div>
          <div class="form-group">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" class="form-control" placeholder="000.000.000-00" required>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informações de Contacto</legend>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" class="form-control" placeholder="seuemail@dominio.com" required>
          </div>
          <div class="form-group">
            <label for="tel">Telefone / Telemóvel:</label>
            <input type="tel" id="tel" class="form-control" placeholder="(00) 00000-0000" required>
          </div>
          <div class="form-group">
            <label for="cep">CEP:</label>
            <input type="text" id="cep" class="form-control" placeholder="00000-000" required>
          </div>
        </fieldset>

        <button type="submit" class="btn btn-accent" style="margin-top: 1rem;">Concluir Registo</button>
      </form>
    </section>
  `;
}