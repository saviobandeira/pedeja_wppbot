const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { handleKeywords } = require('./handlers/handleKeywords.js');
const { autoReplies } = require('./config.js');
const { loadOrders } = require('./utils/orderStorage.js');
const {
    loadContacts,
    hasContact,
    addContact,
    updateLastMessage,
    shouldSendWelcome
} = require('./utils/contactStorage.js');


const client = new Client({
    puppeteer: {
        args: ['--no-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    loadContacts();
    loadOrders();
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    const contact = await msg.getContact();
    const contactID = contact.id;
    const contactName = contact.name || contact.pushname || '';

    if (!hasContact(contactID)) {
        addContact(contactID, contactName);
        msg.reply(autoReplies.welcome);
        return;
    }

    if (shouldSendWelcome(msg.from)) {
        msg.reply(autoReplies.welcome);
        updateLastMessage(msg.from);
        return;
    }

    await handleKeywords(client, msg);

});

client.initialize();    