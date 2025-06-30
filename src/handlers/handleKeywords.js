const { MessageMedia } = require('whatsapp-web.js');
const { keywords, autoReplies, menuFile } = require('../config.js');


async function handleKeywords(client, message) {
    const body = message.body.toLowerCase();

    // Verifica se a mensagem contém alguma palavra-chave do cardápio
    if (keywords.menu.some(k => body.includes(k))) {
        await message.reply(autoReplies.menu);
        await client.sendMessage(message.from, MessageMedia.fromFilePath(menuFile));
        return;
    }

    // Verifica se a mensagem contém alguma palavra-chave de pedido
    if (keywords.order.some(k => body.includes(k))) {
        await message.reply('Ótimo! Me envie seu pedido e logo confirmaremos para você.');
        return;
    }

    // Verifica se a mensagem contém alguma palavra-chave de endereço
    if (keywords.address.some(k => body.includes(k))) {
        await message.reply(autoReplies.address);
        return;
    }

    // Verifica se a mensagem contém alguma palavra-chave de horário
    if (keywords.hours.some(k => body.includes(k))) {
        await message.reply(autoReplies.hours);
        return;
    }

    // Verifica se a mensagem contém alguma palavra-chave de pedido
    if (keywords.order.some(k => body.includes(k))) {
        await message.reply(autoReplies.order);
        return;
    }

    // Mensagem genérica caso não reconheça a intenção
    await message.reply(autoReplies.unknown);
}

module.exports = { handleKeywords };