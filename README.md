# 🍕 Pizzaria Delivery - Modelagem de Dados

## Descrição do Projeto

Este repositório contém a modelagem de dados para um sistema de pizzaria Delivery. O objetivo é organizar as informações e facilitar a gestão de cadastros, produtos (pizzas e bebidas), clientes, pedidos, itens pedidos e motoqueiros em um sistema de entrega online.

## Objetivo

Desenvolver uma modelagem de dados eficiente para:
- Gerenciar o cadastro de clientes, pizzas e bebidas.
- Realizar e registrar pedidos, incluindo itens como pizzas e bebidas.
- Acompanhar a entrega de pedidos por motoqueiros.
- Registrar os pagamentos e seus respectivos métodos.

## Escopo

### Entidades Principais

As entidades representam os principais componentes do sistema de pizzaria delivery. Para este projeto, as seguintes entidades foram definidas:

- **Cliente:** Armazena informações sobre os clientes que fazem pedidos. Cada cliente tem um ID único, nome, endereço, email e telefones (armazenados separadamente em uma tabela de Telefones_Cliente). A entidade Cliente está diretamente relacionada aos pedidos.
- **Pizza:** Representa os produtos principais do sistema. Cada pizza possui um ID, nome, tamanho, preço e lista de ingredientes (relacionada a uma tabela de Ingredientes_Pizzas onde são listados os componentes de cada pizza).
- **Bebida:** Similar à Pizza, a entidade Bebida armazena informações sobre bebidas disponíveis para pedidos, incluindo ID, nome, tamanho e preço.
- **Motoqueiro:** Motoqueiros são os responsáveis pela entrega dos pedidos. Cada motoqueiro tem um ID, nome, número de placa da moto e telefones (relacionado a uma tabela de Telefones_Motoqueiros para armazenar os números de contato).
- **Pedido:** A entidade central que armazena todas as transações dos clientes. Cada pedido contém um ID único, o ID do cliente que fez o pedido, ID do motoqueiro que fez a entrega, valor total, a data e hora do pedido e o endereço de entrega.
- **Itens_Pedido:** Armazena os itens individuais de cada pedido. Cada item tem um ID único, o ID do pedido ao qual pertence, o ID do produto (pizza ou bebida), a quantidade, o preço unitário e o subtotal do item. O tipo de produto (pizza ou bebida) também é registrado para diferenciar os produtos.
- **Pagamento:** Registra como os clientes pagaram por seus pedidos. Cada pagamento tem um ID, o ID do pedido, o valor pago, troco (quando necessário) e a forma de pagamento (relacionado a uma tabela de Formas_Pagamento).

## Modelo Conceitual

O modelo conceitual foi projetado com base nos principais fatores e processos de um sistema de pizzaria delivery, garantindo que todas as informações essenciais para o funcionamento do serviço sejam representadas. Fornecendo uma visão geral dos dados que serão armazenados e como eles se relacionam entre si, sem entrar nos detalhes de implementação. Usado para garantir que todos os requisitos de negócio sejam atendidos antes de iniciar a implementação física do banco de dados.

![Modelo Conceitual](assets/modelo-conceitual-delivery-pizzaria.svg)