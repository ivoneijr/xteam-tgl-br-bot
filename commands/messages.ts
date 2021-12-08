export const HELP_MESSAGE = `HELP_MESSAGE`;
export const INVOICE_MESSAGE = `INVOICE_MESSAGE`;

const messages = [
  {
    key: HELP_MESSAGE,
    value: `The bot just repeats anything you say in the chat.
      \n*Command reference:*
      /ping - *Pong!*
      /whoami - Informações sobre você.
      /help - Mostra essa mensagem.
      /invoice_infos - Mostra informações úteis para preenchimento de nfse para x-team.
      /usdtobrl - Mostra cotação atual de USD para BRL.
      /husky_limit - Mostra Informaçóes sobre limite de recebimento da husky.
    `,
  },
  {
    key: INVOICE_MESSAGE,
    value: `X-Team International Pty Ltd.
    PO Box 537
    Chelsea, VIC 3196
    Australia
    Tax ID: 95 160 801 301
    Australia
    +1 863-225-4802
    contact@x-team.com`,
  },
];

export const getMessage = async (key: string): Promise<string> => {
  const message = messages.find(m => m.key === key);
  console.log('message: ', message);

  return message ? message.value : '';
};
