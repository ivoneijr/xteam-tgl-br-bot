import { commandList } from '../initializers/bot';

export const HELP_MESSAGE = `HELP_MESSAGE`;
export const INVOICE_MESSAGE = `INVOICE_MESSAGE`;
export const HUSKY_LIMIT = `HUSKY_LIMIT`;

const buildHelpMessage = (): string => {
  return `${commandList
    .map(({ command, description }) => `\n/${command}: ${description}`)
    .join('')}`;
};

export const getMessage = async (key: string): Promise<string> => {
  const messages = [
    {
      key: HELP_MESSAGE,
      value: `\nComandos disponíveis: ${buildHelpMessage()}`,
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
    {
      key: HUSKY_LIMIT,
      value: `A husky oferece um limite inicial para recebimentos, se o seu limite está próximo de ser atingido, é recomendado que você entre na sua conta da husky e preencha o formulário de solicitação de aumento de limite, caso contrário seus dols vão ficar guardados com a lobinho. 🐺`,
    },
  ];

  const message = messages.find(m => m.key === key);
  console.log('message: ', message);

  return message ? message.value : '';
};
