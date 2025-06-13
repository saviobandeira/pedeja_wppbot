const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '..', '..');
const dataPath = path.join(rootPath, 'data');
const contactsPath = path.join(dataPath, 'contacts.json');

let contacts = [];

// Carrega os contatos na memória ao iniciar
function loadContacts() {
    if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath);
    }

    contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
}

// Salva os contatos do cache em memória para o arquivo
function saveContacts() {
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
}

// Verifica se o contato existe
function hasContact(id) {
    return contacts.some(c => c.id === id);
}

// Adiciona contato e salva imediatamente
function addContact(id, name) {
    if (!hasContact(id)) {
        const contact = {
            id: id,
            name: name,
            lastMessage: new Date().toISOString()
        }
        contacts.push(contact);
        saveContacts();
    }
}

// Atualiza a data da ultima mensagem
function updateLastMessage(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
        contact.lastMessage = new Date().toISOString();
        saveContacts();
    }
}

// Verifica se a mensagem foi enviada dentro de 1 hora
function shouldSendWelcome(id, hours = 1) {
    const contact = contacts.find(c => c.id === id);
    if (!contact || !contact.lastMessage) return true;
    const last = new Date(contact.lastMessage);
    const now = new Date();
    const diffHours = (now - last) / (1000 * 60 * 60);
    return diffHours >= hours;
}

module.exports = {
    loadContacts,
    hasContact,
    addContact,
    updateLastMessage,
    shouldSendWelcome,
    contacts
};