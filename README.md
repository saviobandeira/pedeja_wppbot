
<div align="center"><img src="./assets/logo.png" alt="logo"/></div>
<br></br>

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green.svg)](LICENSE)

# PedeJá - WhatsApp Bot


Este projeto é um **bot de automação do WhatsApp Web** desenvolvido com [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) e Node.js. O objetivo é facilitar o atendimento digital de restaurantes, possibilitando recebimento de pedidos, respostas automáticas, envio de cardápio, entre outras funções.


> ⚠️ **Aviso:** Este projeto ainda está em desenvolvimento. Estou organizando a base da aplicação e novas funcionalidades serão adicionadas nas próximas versões.


## Funcionalidade

- Envio automático do cardápio em png - (EM BREVE)
- Respostas rápidas a dúvidas frequentes (horário, localização, etc) - (EM BREVE)
- Recebimento e confirmação de pedidos - (EM BREVE)
- Gatilhos por palavras-chave (ex: "cardápio", "fazer pedido", "endereço") - (EM BREVE)
- Fácil personalização para diferentes restaurantes


## Pré-requisito

- [Node.js](https://nodejs.org/) v22.14 (recomendado)
- [npm](https://www.npmjs.com/)
- Conta WhatsApp ativa

## Instalação e Uso

Clone o repositório:

```bash
    git clone https://github.com/saviobandeira/pedeja_wppbot.git
    cd pedeja_wppbot
```

Instale as dependências:

```bash
    npm install
```

Configure o projeto:

   - Adicione seu cardápio em `assets/cardapio.png`
   - Ajuste as mensagens automáticas em `src/config.js`

Inicie o bot:

```bash
    npm run start
```
O terminal exibirá um QR Code. Leia esse código com o WhatsApp do restaurante.

## Contato

Se quiser trocar uma ideia, tirar dúvidas ou falar sobre alguma oportunidade, é só me chamar:

- 📧 Email: saviobandeira.dev@gmail.com
- 💻 GitHub: [github.com/saviobandeira](https://github.com/saviobandeira/)  
- 🔗 LinkedIn: [Sávio Bandeira](https://www.linkedin.com/in/savio-bandeira-79760620b/)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).