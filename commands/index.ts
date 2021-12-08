import { Context } from 'telegraf';
import axios from 'axios';

import { HELP_MESSAGE, INVOICE_MESSAGE, getMessage } from './messages';

export const help = async (ctx: Context) => {
  const message = await getMessage(HELP_MESSAGE);
  return ctx.reply(message);
};

export const whoAmI = async (ctx: Context) => {
  const userInfo = JSON.stringify(ctx.from);

  return ctx.reply(`User info: ${userInfo}`);
};

export const ping = async (ctx: Context) => {
  return ctx.replyWithMarkdown('*Pong!*');
};

export const invoiceInfos = async (ctx: Context) => {
  const message = await getMessage(INVOICE_MESSAGE);
  return ctx.reply(message);
};

export const usdToBrl = async (ctx: Context) => {
  const response = await axios.get(`${process.env.ECO_AWESOME_API}/USD-BRL`);

  return ctx.reply(`A cotação atual é de ${response.data.USDBRL.bid}`);
};

export const huskyLimit = async (ctx: Context) => {
  return ctx.reply(
    `A husky oferece um limite inicial para recebimentos, se o seu limite está próximo de ser atingido, é recomendado que você entre na sua conta da husky e preencha o formulário de solicitação de aumento de limite, caso contrário seus dols vão ficar guardados com a lobinho. 🐺`,
  );
};
