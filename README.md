# Projeto Lista de Desejos

Este projeto é parte do processo de entrevista da Upik e é baseado no conceito de uma lista de desejos. O usuário pode registrar produtos em uma lista de desejos, com nome, descrição e link. O projeto oferece a capacidade de excluir esses itens, bem como pesquisar por nome. O usuário também tem a opção de filtrar por mais antigos ou mais recentes.

## Tecnologias utilizadas

1. Backend em Node.js
2. Backend em .NET
3. Frontend em Next.js

O projeto é dividido em três partes, cada uma referente a uma tecnologia acima mencionada.

## Como iniciar o projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- Node.js
- .NET Core

### Instruções para iniciar o Backend em .NET

1. Certifique-se de que o .NET Core está instalado no seu sistema. Se não, você pode baixá-lo e instalá-lo a partir [deste link](https://dotnet.microsoft.com/download).
2. Navegue até a pasta do projeto .NET usando o terminal.
3. Execute o comando `dotnet run` para iniciar o projeto.

### Instruções para iniciar o Backend em Node.js e Frontend em Next.js

1. Certifique-se de que Node.js está instalado no seu sistema. Se não, você pode baixá-lo e instalá-lo a partir [deste link](https://nodejs.org/en/download/).
2. Navegue até a pasta do projeto Node.js ou Next.js usando o terminal.
3. Execute o comando `npm install` para instalar todas as dependências do projeto.
4. Execute o comando `npm run dev` para iniciar o projeto.

# Tarefa 2: Resolução de Problemas

## Cenário

Um usuário disse que esta tendo dificuldade pra interagir com nossa aplicação web. A página parece carregar parcialmente, mas então trava, impedindo qualquer interação

## Causas do problema

1. **Cache**: Pode ser que o browser está guardando caches antigos após uma atualização recente do site.
1. **Browser**: Pode ser que a aplicação não esteja configurada para funcionar no browser que o usuario está tentando acessar.
1. **Browser Desatualizado**: O navegador do usuário pode estar desatualizado e não suporta todas as funcionalidades da aplicação (Cenário considerando aplicação sem um bundler).
1. **Conectividade, VPN, DNS**: O usuário pode estar com problemas de rede como DNS ou VPN.
1. **Frontend**: Pode ser que realmente exista um problema no lifecycle da página como um memory leak.
1. **Backend**: Algo no backend pode estar impedindo que a página carregar por completo como um erro não previsto pelo front ou problema de CORS.

## Resolução do Problema

1. Pedir pro usuário limpar o cache do navegador ou entrar em uma janela anônima, um cache velho pode dar problema.
2. Pedir pro usuário tentar acessar o através de outro browser caso seja um browser não convencional.
3. Pedir pro usuário tentar acessar o site com uma outra conexão de internet pra descartar problemas de conectividade, desativar VPN, Proxies, ou DNS.
4. Se o problema continuar, coletar o máximo de informações possíveis sobre o erro. Isso inclui as ações que o usuário fez antes do problema ocorrer e detalhes do dispositivo e navegador do usuário e logs do console.
5. Com essas informações, tentar reproduzir o problema em um ambiente de desenvolvimento pra identificar a causa raiz.
6. Depois de achar o problema, fazer as correções necessárias no código e testa a solução.

## Justificativa

Com essa abordagem podemos descartar as causas mais comuns de problemas de carregamento de página desde o começo. começamos com soluções que o próprio usuário pode fazer e depois vamos pra soluções que precisam da intervenção do time de desenvolvimento, inicialmente com o front e caso seja o problema, o back. Os erros mais comuns que acontecem são de browsers incompativeis e cenários não esperados como um erro no backend ou uma configuração mal feita da aplicação.
