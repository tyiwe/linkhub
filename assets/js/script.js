// descobre de onde a pessoa veio (ou null se não souber)
function descobrirOrigem() {
  // 1) parâmetro na URL tem prioridade (ex: ?origem=github)
  const parametros = new URLSearchParams(window.location.search);
  const origemUrl = parametros.get("origem");
  if (origemUrl) {
    return origemUrl.toLowerCase();
  }

  // 2) navegador interno dos apps se identifica no userAgent
  const agente = navigator.userAgent.toLowerCase();
  if (agente.includes("instagram")) {
    return "instagram";
  }
  if (agente.includes("linkedinapp")) {
    return "linkedin";
  }

  // 3) site de onde a pessoa clicou (nem sempre é enviado)
  const referrer = document.referrer.toLowerCase();
  if (referrer.includes("github.com")) {
    return "github";
  }
  if (referrer.includes("linkedin.com")) {
    return "linkedin";
  }

  return null; // não descobriu: mostra todos os links
}

// mostra o erro na tela, e não só no console
function mostrarErro() {
  const mensagem = document.getElementById("mensagem-erro");
  mensagem.textContent = "Não foi possível carregar os links. Tente recarregar a página.";
  mensagem.hidden = false; // tira o atributo hidden e a mensagem aparece
}

async function carregarLinks() {
  try {
    const resposta = await fetch("assets/data/links.json");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os links");
    }

    const links = await resposta.json();

    const origem = descobrirOrigem();

    // guarda só os links que NÃO são da rede de origem
    const linksVisiveis = links.filter((link) => link.rede !== origem);

    const container = document.getElementById("lista-links");

    linksVisiveis.forEach((link) => {
      const botao = document.createElement("a");
      botao.href = link.url;
      botao.textContent = link.nome;
      botao.classList.add("botao-link");
      botao.target = "_blank";
      botao.rel = "noopener noreferrer"; // segurança ao abrir em nova aba
      container.appendChild(botao);
    });
  } catch (erro) {
    console.error("Erro ao carregar links:", erro);
    mostrarErro(); // avisa a pessoa na tela
  }
}

carregarLinks();