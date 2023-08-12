# Desafio UOL

Aplicação desenvolvida durante o processo seletivo para desenvolvedor front-end do UOL. Sua funcionalidade consiste em listar clientes resultantes de uma chamada de API e a filtragem deles de acordo com parêmetros inseridos pelo usuário.

## Links online

[Site do projeto](https://desafio-uol.vercel.app/)

[Site do Storybook do projeto](https://moggishere.github.io/desafio-uol-storybook/)

## Pré-requisitos

- Node.js (versão 14.6.0 ou superior)
- npm (geralmente vem com o Node.js) ou Yarn
- git (opcional, para clonar o repositório)

## Como Rodar Localmente

1. Clone este repositório (ou faça o download do ZIP):

   ```bash
   git clone https://github.com/moggishere/desafio-uol.git
   ```

2. Acesse o diretório do projeto:

    ```bash
    cd desafio-uol
    ```

3. Instale as dependências com npm:

    ```bash
    npm install
    ```
    Ou, instale com Yarn:

    ```bash
    yarn
    ```

4. Execute o servidor de desenvolvimento do Next.js com npm:

    ```bash
    npm run dev
    ```

    Ou, com Yarn:

    ```bash
    yarn dev
    ```
O aplicativo estará disponível em http://localhost:3000.

## Como Executar o Storybook
1. Certifique-se de estar no diretório do projeto:

    ```bash
    cd desafio-uol
    ```

2. Execute o Storybook com npm:

    ```bash
    npm run storybook
    ```
    
    Ou, com Yarn:

    ```bash
    yarn storybook
    ``` 
O Storybook estará disponível em http://localhost:6006.

## Como Rodar os Testes Unitários
1. Para rodar os testes utilizando Jest e React Testing Library, certifique-se de estar no diretório do projeto:

    ```bash
    cd desafio-uol
    ```

2. Execute os testes com npm:

    ```bash
    npm test
    ```
    
    Ou, com Yarn:

    ```bash
    yarn test
    ``` 

## Scripts Disponíveis
* **npm run dev** ou **yarn dev**: Inicia o servidor de desenvolvimento do Next.js.
* **npm run build** ou **yarn build**: Compila o aplicativo Next.js para produção.
* **npm start** ou **yarn start**: Inicia o aplicativo compilado.
* **npm run storybook** ou **yarn storybook**: Inicia o Storybook.
* **npm run storybook** ou **yarn storybook**: Inicia o Storybook.
* **npm test** ou **yarn test**: Executa os testes utilizando Jest e React Testing Library.