import { Context } from 'telegraf';

export const help = (ctx: Context) => {
  const message = `The bot just repeats anything you say in the chat.
    \n*Command reference:*
    /ping - *Pong!*
    /whoami - Informações sobre você.
    /help - Mostra essa mensagem.`;

  return ctx.replyWithMarkdown(message);
};

export const whoAmI = (ctx: Context) => {
  const userInfo = JSON.stringify(ctx.from);

  return ctx.reply(`User info: ${userInfo}`);
};

export const ping = (ctx: Context) => {
  return ctx.replyWithMarkdown('*Pong!*');
};

export const invoiceInfos = (ctx: Context) => {
  return ctx.reply(`
    X-Team International Pty Ltd.
    PO Box 537
    Chelsea, VIC 3196
    Australia
    Tax ID: 95 160 801 301
    Australia
    +1 863-225-4802
    contact@x-team.com
  `);
};
