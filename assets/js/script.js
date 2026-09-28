async function carregarLinks() {
  try {
    const resposta = await fetch("assets/data/links.json");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os links");
    }

    const links = await resposta.json();

    // lê o que vem depois do ? na URL (ex: ?origem=github)
    const parametros = new URLSearchParams(window.location.search);
    const origem = parametros.get("origem"); // fica null se não tiver nada

    // guarda só os links que NÃO são da rede de onde a pessoa veio
    const linksVisiveis = links.filter((link) => link.rede !== origem);

    const container = document.getElementById("lista-links");

    linksVisiveis.forEach((link) => {
      const botao = document.createElement("a");
      botao.href = link.url;
      botao.textContent = link.nome;
      botao.classList.add("botao-link");
      botao.target = "_blank";
      container.appendChild(botao);

    });
  } catch (erro) {
    console.error("Erro ao carregar links:", erro);
  }
}

carregarLinks();