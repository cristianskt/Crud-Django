**Gerenciamento de Estoque de Produtos**
Este projeto é uma aplicação web para gerenciamento de estoque de produtos, desenvolvida com Django para o backend e React para o frontend. A aplicação oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar e Excluir) para gerenciar os produtos no estoque de forma prática.

**Tecnologias Utilizadas**
Backend: Django e Django REST Framework
Frontend: React e Tailwind CSS
Banco de Dados: SQLite (usado para desenvolvimento e testes)
Axios: para a comunicação entre frontend e backend
Visão Geral do Projeto
O sistema de gerenciamento de estoque permite aos usuários:

**Listar produtos:** Visualizar todos os produtos cadastrados no estoque.
Adicionar produtos: Inserir novos produtos no estoque.
Atualizar produtos: Editar informações dos produtos existentes.
Excluir produtos: Remover produtos do estoque.
Estrutura do Backend (Django)
O backend foi criado usando Django, com o Django REST Framework para fornecer APIs RESTful. As operações de CRUD são disponibilizadas pelas seguintes rotas:

**Endpoints Disponíveis**
GET /api/products: Retorna a lista de todos os produtos ou permite filtragem por nome.
POST /api/products: Adiciona um novo produto ao estoque.
PUT /api/products/{id}: Atualiza as informações de um produto específico.
DELETE /api/products/{id}: Exclui um produto do estoque.
Modelos
O modelo Product representa os produtos no banco de dados, com os seguintes campos:

**name: Nome do produto.**
description: Descrição detalhada do produto.
qty_stock: Quantidade disponível no estoque.
price: Preço unitário do produto.
added_date: Data de adição ao estoque.
Serializers
O ProductSerializer é utilizado para converter os dados do modelo Product em formato JSON e vice-versa, permitindo operações completas de GET, POST, PUT e DELETE.

**Estrutura do Frontend (React)**
O frontend foi desenvolvido em React, com estilização através do Tailwind CSS para garantir um layout limpo e responsivo.

**Componentes Principais**
ProductList: Exibe a lista de produtos cadastrados.
ProductItem: Mostra informações detalhadas de um produto com opções de edição e exclusão.
ProductForm: Formulário para adicionar ou editar produtos, permitindo a alteração dos dados ou o cadastro de novos itens.
Funcionalidades Implementadas

**Listagem de Produtos**: Visualização de todos os produtos cadastrados no estoque.
Adicionar Produto: Permite a inclusão de novos produtos.
Editar Produto: Permite a atualização das informações de um produto existente.
Excluir Produto: Cada produto inclui um botão de exclusão.

**Atualização Automática:** Após uma adição ou exclusão, a lista é atualizada automaticamente sem recarregar a página.
Processo de Desenvolvimento
1. Planejamento
O desenvolvimento foi dividido em três partes principais:

**Configuração do Backend:**

**Criação do modelo Product.**
Implementação de endpoints para as operações CRUD.
Configuração do Django REST Framework para facilitar a integração com o frontend.
Desenvolvimento do Frontend:

Criação de componentes React para listar, adicionar, editar e excluir produtos.
Integração com o backend usando Axios para fazer requisições HTTP.
Estilização com Tailwind CSS:

Aplicação do Tailwind CSS para uma interface bonita, responsiva e fácil de navegar.
2. Desafios e Soluções
Atualização Automática da Página: Inicialmente, a página não atualizava automaticamente após uma adição ou exclusão. Esse problema foi resolvido com a atualização da lista de produtos diretamente no frontend.

Problemas de Comunicação entre Frontend e Backend: Durante o desenvolvimento, houve desafios com as rotas da API e configurações de CORS. Ajustes nas rotas e configurações do Django permitiram a comunicação entre o backend e o frontend.

**Instruções para Execução do Projeto**
Backend (Django)
Instalar dependências:

Navegue até a pasta do backend e instale as dependências:

bash
Copiar código
pip install -r requirements.txt
Iniciar o servidor de desenvolvimento:

bash
python manage.py runserver
O backend estará disponível em http://127.0.0.1:8000/.

Frontend (React)
Instalar dependências:

Navegue até a pasta do frontend e instale as dependências:

bash

npm install
Rodar o servidor:

bash

npm start
O frontend estará disponível em http://localhost:3000/.
