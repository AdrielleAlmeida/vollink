# Vollink

Vollink é uma aplicação que conecta voluntários a pessoas que precisam de serviços sociais em datas específicas. A plataforma permite que voluntários cadastrem serviços e beneficiários encontrem ajuda facilmente.

## 🧩 Tecnologias Utilizadas

- **Frontend**: React + Vite + TailwindCSS
- **Backend**: NestJS + PostgreSQL
- **Comunicação**: REST API + JWT + Ngrok
- **Banco de Dados**: PostgreSQL
- **Hospedagem Frontend**: Vercel

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/vollink.git
cd vollink
```

---

## 📦 Backend (NestJS)

### Pré-requisitos

- Node.js ^18
- Docker e Docker Compose (ou PostgreSQL local)

### Instalação

```bash
cd vollink-backend
npm install
```

### Configuração do ambiente

Crie um arquivo `.env` com:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/vollink
JWT_SECRET=uma-chave-secreta
```

> Ajuste `usuario`, `senha` e `localhost` conforme seu banco local ou Docker.

### Rodar com Docker (PostgreSQL)

```bash
docker compose up -d
```

### Rodar o servidor NestJS

```bash
npm run start
```

---

## 🌐 Expondo o backend com Ngrok

### Instale o Ngrok (caso ainda não tenha)

```bash
npm install -g ngrok
```

### Exponha a porta do backend

```bash
ngrok http 3000
```

Copie o link HTTPS gerado e use no frontend `.env`.

---

## 💻 Frontend (React + Vite)

### Instalação

```bash
cd vollink-frontend
npm install
```

### Configuração do ambiente

Crie um arquivo `.env` com:

```env
VITE_API_URL=https://xxxxxx.ngrok.io
```

> Substitua pelo link HTTPS gerado pelo Ngrok.

### Rodar em desenvolvimento

```bash
npm run dev
```

---

## 🆙 Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Acesse [https://vercel.com](https://vercel.com) e importe o repositório.
3. Em **Environment Variables**, adicione:

```env
VITE_API_URL=https://xxxxxx.ngrok.io
```

4. Finalize o deploy. Acesse pelo link gerado (ex: `https://vollink.vercel.app`).

---

## ✅ Funcionalidades

- Cadastro e login de usuários
- Escolha de papel: voluntário ou beneficiário
- Voluntário pode cadastrar serviços com data/local
- Beneficiário pode visualizar serviços disponíveis
- Tela de "Meus Serviços" para voluntários

---

## 🧪 Teste Rápido

Você pode testar o backend com:

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User", "email":"test@example.com", "username":"testuser", "password":"123456"}'
```

---

## 📌 Observações

- Este projeto está em fase de protótipo/MVP.
- Recomendado migrar o backend para Render ou Railway para produção.

---

## 📄 Licença

MIT © 2025 - Desenvolvido por [Seu Nome]