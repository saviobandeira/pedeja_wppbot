const restaurantInfo = {
    name: "Restaurante PedeJá",
    address: "Rua Exemplo, 123 - Centro, Cidade/UF",
    phone: "(99) 99999-9999",
    horario: "Seg a Sex: 11h às 22h | Sáb e Dom: 12h às 23h"
};

const menuFile = "assets/cardapio.png";

const keywords = {
    menu: ["menu", "cardápio", "cardapio"],
    order: ["pedido", "fazer pedido"],
    address: ["endereço", "endereco", "localização", "localizacão", "localizacao", "localizaçao", "onde fica"],
    hours: ["horário", "horario", "funcionamento"]
};

const autoReplies = {
    welcome: `Olá! Seja bem-vindo ao ${restaurantInfo.name}! Digite "cardápio" para receber nosso menu ou "fazer pedido" para iniciar um pedido.`,
    menu: "Aqui está nosso cardápio:",
    address: `Nosso endereço é: ${restaurantInfo.address}`,
    hours: `Nosso horário de funcionamento: ${restaurantInfo.horario}`,
    order: 'Para realizar seu pedido, por favor, informe os itens desejados e o endereço para entrega.\nAssim que recebermos essas informações, um atendente será notificado para confirmar o seu pedido com você.',
    unknown: "Desculpe, não entendi sua mensagem. Digite 'cardápio' para ver o menu ou 'fazer pedido' para iniciar um pedido."
};

module.exports = { restaurantInfo, menuFile, keywords, autoReplies }