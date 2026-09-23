fetch("assets/data/links.json")
  .then((resposta) => resposta.json())
  .then((links) => {
    const container = document.getElementById("lista-links");

    links.forEach((link) => {
      const botao = document.createElement("a");
      botao.href = link.url;
      botao.textContent = link.nome;
      botao.classList.add("botao-link");
      botao.target = "_blank";
      container.appendChild(botao);
    });
  })
  .catch((erro) => {
    console.error("Erro ao carregar links:", erro);
  });