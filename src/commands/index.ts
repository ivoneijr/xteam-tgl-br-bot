import { Context } from 'telegraf';
import axios from 'axios';

import {
  HELP_MESSAGE,
  INVOICE_MESSAGE,
  HUSKY_LIMIT,
  getMessage,
} from './messages';

export const help = async (ctx: Context) => {
  const message = await getMessage(HELP_MESSAGE);
  ctx.reply(message);
};

export const whoAmI = async (ctx: Context) => {
  const userInfo = JSON.stringify(ctx.from);

  ctx.reply(`User info: ${userInfo}`);
};

export const ping = async (ctx: Context) => {
  ctx.replyWithMarkdown('*Pong!*');
};

export const invoiceInfos = async (ctx: Context) => {
  const message = await getMessage(INVOICE_MESSAGE);
  ctx.reply(message);
};

export const usdToBrl = async (ctx: Context) => {
  const response = await axios.get(`${process.env.ECO_AWESOME_API}/USD-BRL`);

  ctx.reply(`A cotação atual é de ${response.data.USDBRL.bid}`);
};

export const huskyLimit = async (ctx: Context) => {
  const message = await getMessage(HUSKY_LIMIT);

  ctx.reply(message);
};

export const freeCoins = async (ctx: Context) => {
  ctx.reply(
    `Pegadinha do malandro, Rá IÉ IÉ !! Achou mesmo que seria fácil assim? :D`,
  );
};
