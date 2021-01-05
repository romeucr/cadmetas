Criar o projeto
### npm init

Instalar Next.JS, React e React-dom
### npm install next react react-dom

Iniciar o projeto
### npm run dev (roda no perfil dev)

Incluir em scripts no package.json (remover test e deixar só isso)
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }, ... {contina o arquivo}

Criar diretorio pages na raiz do projeto com o arquivo index.js. conteúdo:
function Home() {
  return <div>Welcome to Next.js!</div>
}

export default Home

Alterar o favicon e outras propriedades da página
criar a pasta public na raiz do projeto
copiar uma imagem com nome favicon.ico 

Instalar o Bootstrap
### npm install --save bootstrap

Instalar o Reactstrap
### √
