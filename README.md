# NoteBuddy

Um app simples de lista de tarefas feito em HTML, CSS e JavaScript.

## Visão geral

- `src/index.html` - estrutura da página.
- `src/estilo.css` - estilos visuais do app.
- `src/logica.js` - lógica de adicionar, marcar e excluir tarefas.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas com clique.
- Excluir tarefas com o botão de remoção.
- Persistência local usando `localStorage` para manter tarefas entre sessões.

## Como usar

1. Abra o arquivo `src/index.html` em um navegador.
2. Digite sua tarefa no campo de entrada.
3. Clique no botão de adicionar para incluir a tarefa na lista.
4. Clique sobre uma tarefa para marcar/desmarcar como concluída.
5. Clique no `×` no canto da tarefa para removê-la.

## Estrutura do projeto

```
src/
  ├─ index.html
  ├─ estilo.css
  └─ logica.js
```

## Requisitos

- Navegador moderno com suporte a JavaScript.

## Observações

- O app salva as tarefas no `localStorage` do navegador.
- Para redefinir a lista, limpe o cache/localStorage do navegador ou remova as tarefas manualmente.
