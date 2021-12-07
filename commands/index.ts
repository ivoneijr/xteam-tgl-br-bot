import { Context } from 'telegraf';
import { HELP_MESSAGE, INVOICE_MESSAGE, getMessage } from './messages';

export const help = (ctx: Context) => {
  return ctx.replyWithMarkdown(getMessage(HELP_MESSAGE));
};

export const whoAmI = (ctx: Context) => {
  const userInfo = JSON.stringify(ctx.from);

  return ctx.reply(`User info: ${userInfo}`);
};

export const ping = (ctx: Context) => {
  return ctx.replyWithMarkdown('*Pong!*');
};

export const invoiceInfos = (ctx: Context) => {
  return ctx.reply(getMessage(INVOICE_MESSAGE));
};
