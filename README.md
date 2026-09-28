
## Funcionalidades

- Exibição dinâmica dos links (lidos de um arquivo JSON via JavaScript, não fixos no HTML)
- Layout centralizado e responsivo (Flexbox)
- Efeito hover nos botões

## Decisões técnicas

- Os links não ficam escritos direto no HTML. O JavaScript busca esses dados em
  `assets/data/links.json` e monta os botões dinamicamente. Isso deixa o projeto
  preparado para, futuramente, trocar esse arquivo por uma API (ex: Python/Flask)
  sem precisar reescrever a lógica de exibição.
- Centralização da página feita com Flexbox (`display: flex`, `flex-direction: column`,
  `align-items: center`, `justify-content: center`), em vez de margens fixas.
- `width: 100%` combinado com `max-width: 320px` no `main` para funcionar bem
  tanto em celular quanto em telas grandes, sem media queries.

## Desafios técnicos

- **CORS ao testar localmente:** abrir o `index.html` direto com duplo clique
  (`file://`) faz o `fetch()` falhar, porque o navegador bloqueia essa leitura
  de arquivo local por segurança. Resolvido usando a extensão Live Server do VS Code.
- **Centralização vertical:** inicialmente a página só centralizava na horizontal.
  Foi preciso entender a diferença entre `align-items` (eixo transversal) e
  `justify-content` (eixo principal) no Flexbox para centralizar nos dois eixos.

## Próximos passos

- [ ] Adicionar tema claro/escuro
- [ ] Adicionar backend em Python (Flask/FastAPI) para servir os links via API
- [ ] Adicionar banco de dados

## Site no ar

[Acesse aqui](https://tyiwe.github.io/linkhub/)

## Como visualizar localmente

Abra o projeto com a extensão **Live Server** no VS Code, ou rode:

```bash
python -m http.server
```

Depois acesse `http://localhost:8000` no navegador.

## Uso de Inteligência Artificial

Durante o desenvolvimento deste projeto, utilizei a IA (Claude) como apoio ao
aprendizado, já que ainda estou iniciando os estudos em desenvolvimento web. A
IA foi consultada para tirar dúvidas sobre HTML semântico, Flexbox, JavaScript
(Fetch API) e boas práticas de organização de projeto e uso de Git/GitHub
(commits, tags de versão). As decisões finais de estrutura, conteúdo e todo o
código foram revisadas e compreendidas por mim.
