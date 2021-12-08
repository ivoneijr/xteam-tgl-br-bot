import { Telegraf } from 'telegraf';
import { Command } from '../types';

import {
  help,
  whoAmI,
  ping,
  invoiceInfos,
  usdToBrl,
  huskyLimit,
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

const commands = [
  {
    command: 'ping',
    description: '*Pong!*',
    handler: ping,
  },
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
] as Command[];

commands.forEach(({ command, handler }) => {
  bot.command(command, handler);
});
