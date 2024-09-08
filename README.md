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

**Cliente:**
- ID_Cliente
- Nome
- Endereço
- Telefones
- Email

**Pizza:**
- ID_Pizza
- Nome
- Tamanho
- Preço
- Ingredientes

**Bebida:**
- ID_Bebida
- Nome
- Tamanho
- Preço

**Motoqueiro:**
- ID_Motoqueiro
- Nome
- Telefone
- Placa_Moto

**Pedido:**
- ID_Pedido
- ID_Cliente
- Data_Hora_Pedido
- Valor_Total
- ID_Motoqueiro
- Endereço_Entrega

**Itens_Pedido:**
- ID_Item
- ID_Pedido
- Tipo_Produto
- ID_Produto
- Quantidade
- Preço_Unitário
- Subtotal

**Pagamento:**
- ID_Pagamento
- ID_Pedido
- Valor_Pago
- Forma_Pagamento
- Troco
