import { commands } from '../initializers/bot';

export const HELP_MESSAGE = `HELP_MESSAGE`;
export const INVOICE_MESSAGE = `INVOICE_MESSAGE`;

const buildHelpMessage = () => {
  const result = commands
    .map(command => `/${command.command} - ${command.description}`)
    .join('\n');

  return result;
};

const messages = [
  {
    key: HELP_MESSAGE,
    value: `
      \n*Command reference:*
      ${buildHelpMessage()}
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
