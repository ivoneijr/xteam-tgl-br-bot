import { Telegraf } from 'telegraf';
import { Command } from '../types';

import {
  help,
  whoAmI,
  ping,
  invoiceInfos,
  usdToBrl,
  huskyLimit,
  freeCoins,
} from '../commands';

export const bot = new Telegraf(process.env.BOT_TOKEN!, {
  telegram: { webhookReply: true },
});

bot.start(ctx => {
  return ctx.reply(
    `Olá ${
      ctx.from.first_name ? ctx.from.first_name : 'friend'
    }! Use /help para ver os comandos disponíveis.`,
  );
});

bot.help(help);

export const commandList = [
  // {
  //   command: 'ping',
  //   description: '*Pong!*',
  //   handler: ping,
  // },
  {
    command: 'whoami',
    description: 'Informações sobre você.',
    handler: whoAmI,
  },
  {
    command: 'invoice_infos',
    description:
      'Mostra informações úteis para preenchimento de nfse para x-team.',
    handler: invoiceInfos,
  },
  {
    command: 'usdtobrl',
    description: 'Mostra cotação atual de USD para BRL.',
    handler: usdToBrl,
  },
  {
    command: 'husky_limit',
    description: 'Mostra Informaçóes sobre limite de recebimento da husky.',
    handler: huskyLimit,
  },
  {
    command: 'free_coins',
    description:
      'Você ganha imediatamente 10 coins para gastar no vault. (só pode ser usado 1x)',
    handler: freeCoins,
  },
] as Command[];

commandList.forEach(({ command, handler }) => {
  bot.command(command, handler);
});
