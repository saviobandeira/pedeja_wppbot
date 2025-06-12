const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { handleKeywords } = require('./handlers/handleKeywords.js');


const client = new Client({
    puppeteer: {
        args: ['--no-sandbox']
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {

    await handleKeywords(client, msg);

});

client.initialize();    