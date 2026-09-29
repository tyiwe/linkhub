# LinkHub

Página pessoal de links (estilo link na bio) feita com HTML, CSS e JavaScript.

## Funcionalidades

- Exibição dinâmica dos links (lidos de um arquivo JSON via JavaScript, não fixos no HTML)
- Esconde o link da rede de onde a pessoa veio (ex: quem chega pelo Instagram não vê o botão do Instagram)
- Links curtos para cada rede, com redirecionamento
- Mensagem de erro na tela se os links não carregarem
- Layout centralizado e responsivo (Flexbox)
- Efeito hover nos botões

## Como funciona a detecção de origem

A função `descobrirOrigem()` tenta três jeitos, nesta ordem:

1. **Parâmetro na URL:** `?origem=github`. É o mais confiável, porque eu mesmo escolho o valor.
2. **userAgent:** o navegador interno de alguns apps (como o Instagram) se identifica com o nome do app.
3. **referrer:** o site de onde a pessoa clicou. Nem sempre é enviado pelo navegador, por isso é o último recurso.

Se nenhum funcionar, todos os links aparecem. Cada link do `links.json` tem um campo `rede`, e o filtro esconde o que for igual à origem.

## Links curtos

O repositório [tyiwe.github.io](https://github.com/tyiwe/tyiwe.github.io) guarda páginas de redirecionamento que levam para o LinkHub já com a origem:

- `tyiwe.github.io/ig/` → origem instagram
- `tyiwe.github.io/gh/` → origem github
- `tyiwe.github.io/in/` → origem linkedin
- `tyiwe.github.io/` → todos os links

## Decisões técnicas

- Os links não ficam escritos direto no HTML. O JavaScript busca esses dados em
`assets/data/links.json` e monta os botões dinamicamente. Isso deixa o projeto
preparado para, futuramente, trocar esse arquivo por uma API (ex: Python/Flask)
sem precisar reescrever a lógica de exibição.
- Centralização da página feita com Flexbox, em vez de margens fixas.
- `width: 100%` combinado com `max-width: 320px` no `main` para funcionar bem
tanto em celular quanto em telas grandes, sem media queries.
- O `fetch` não considera erro uma resposta 404, então o código verifica
`resposta.ok`