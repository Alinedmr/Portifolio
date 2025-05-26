const githubUsername = "Alinedmr"; 

const projetosComImagens = {
  "LojaCha": "https://raw.githubusercontent.com/Alinedmr/lojaCha/main/telaMenu/thumbnail.png",
  "SimuladorColetaDeLixo":"https://raw.githubusercontent.com/Alinedmr/SimuladorColetaDeLixo/master/src/thumbnail%20(2).png",
  "HierarquiaEmpresa": "https://raw.githubusercontent.com/Alinedmr/HierarquiaEmpresa/main/src/empresa/thumbnail3.png",
}


async function carregarProjetos() {
  const container = document.getElementById("project-grid");

  try {
    const res = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
    const repos = await res.json();

    container.innerHTML = ""; // pra tirar o loading

    repos.slice(0, 6).forEach(repo => {
        const imagem = projetosComImagens[repo.name] || "https://via.placeholder.com/150"; // Imagem padrão se não houver imagem específica
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <div class="card-image">${imagem ? `<img src="${imagem}" alt="${repo.name}" />` : "Sem imagem"}
          </div>
        <div class="card-content">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sem descrição."}</p>
          <a href="${repo.html_url}" target="_blank">Ver projeto →</a>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar projetos.</p>";
  }
}

carregarProjetos();
