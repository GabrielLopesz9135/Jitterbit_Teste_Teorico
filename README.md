# API de Gerenciamento de Pedidos

Esta é uma API simples em **Node.js**, **Express** e **MongoDB** para gerenciar pedidos.
Possui autenticação JWT para proteger as rotas.

---

## 📦 Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Swagger ou Postman para documentação

---

## ⚡ Funcionalidades

- Criar, listar, buscar, atualizar e deletar pedidos
- Autenticação via JWT
- Estrutura de dados mapeada para banco de dados
- Documentação online (Postman ou Swagger)

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` na raiz do projeto:

```ini
PORT=3000
MONGO_URI=<SUA_STRING_DE_CONEXAO_MONGODB>
JWT_SECRET=sua_chave_super_secreta
```

4. Inicie o servidor:

```bash
npm start
```

O servidor irá rodar em `http://localhost:3000`.

---

## 🔑 Autenticação JWT

A API usa token JWT para proteger as rotas.
Para testes, utilize o usuário fixo:

```makefile
email: admin@admin.com
senha: 123456
```

1. Faça login:

```bash
POST /auth/login
```

Body:

```json
{
  "email": "admin@admin.com",
  "senha": "123456"
}
```

2. Use o token retornado no header `Authorization` das demais rotas:

```makefile
Authorization: Bearer <SEU_TOKEN>
```

---

## 📌 Rotas da API

### Auth

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/auth/login` | Autentica usuário e retorna token JWT |

### Pedidos

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/order` | Cria um novo pedido |
| `GET` | `/order` | Lista todos os pedidos |
| `GET` | `/order/:id` | Obtém um pedido pelo ID |
| `PUT` | `/order/:id` | Atualiza um pedido existente |
| `DELETE` | `/order/:id` | Deleta um pedido |

Todas as rotas de pedidos requerem JWT.

---

## 📄 Documentação

Você pode acessar a documentação detalhada da API aqui:
[Link da documentação](#)

---

## 💡 Observações

- O banco de dados usado é **MongoDB**, mas pode ser alterado para SQL ou PostgreSQL adaptando o modelo de dados.
- O token JWT expira em 1 hora.
- Para testes locais, você pode usar o Postman ou o Swagger.

---

## 👨‍💻 Como contribuir

1. Faça um fork do repositório
2. Crie uma branch com a feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m "Descrição da feature"
   ```
4. Faça push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request
