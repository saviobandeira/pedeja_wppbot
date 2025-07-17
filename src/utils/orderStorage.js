const fs = require('fs');
const path = require('path');
const { getContact } = require('./contactStorage.js');

const rootPath = path.join(__dirname, '..', '..');
const dataPath = path.join(rootPath, 'data');
const ordersPath = path.join(dataPath, 'orders.json');

let orders = [];

// Carrega os pedidos na memória ao iniciar
function loadOrders() {
    if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath);
    }

    if (!fs.existsSync(ordersPath)) {
        fs.writeFileSync(ordersPath, JSON.stringify([], null, 2));
    }

    orders = JSON.parse(fs.readFileSync(ordersPath, 'utf-8'));
    return console.log('Todos os pedidos foram carregados com sucesso.');
}

function getOrder(id) {
    return orders.find(order => order.id === id);
}

// Adiciona pedido e salva imediatamente
function addOrder(message, contactId) {
    const order = {
        id: orders.length + 1,
        message: message,
        data: new Date.now(),
        contact: getContact(contactId),
    }

    orders.push(order);
    saveOrders();
}

// Salva os pedidos em memória no arquivo
function saveOrders() {
    fs.writeFileSync(ordersPath, JSON.stringify(orders, null, 2));
}

// Verifica se existe algum pedido vinculado ao contato
function hasOrder(contactId) {
    return orders.some(order => order.contact.id === contactId);
}

module.exports = {
    loadOrders,
    getOrder,
    saveOrders,
    addOrder,
    hasOrder
}