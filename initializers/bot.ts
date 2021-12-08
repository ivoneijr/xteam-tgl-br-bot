import { Telegraf } from 'telegraf';
import {
  help,
  whoAmI,
  ping,
  invoiceInfos,
  usdToBrl,
  huskyLimit,
} from '../commands';
import { Command } from '../types';

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

export const commands = [
  {
    command: 'ping',
    description: '*Pong!*',
    runner: ping,
  },
  {
    command: 'whoami',
    description: 'Informações sobre você.',
    runner: whoAmI,
  },
  {
    command: 'invoice_infos',
    description:
      'Mostra informações úteis para preenchimento de nfse para x-team.',
    runner: invoiceInfos,
  },
  {
    command: 'usdtobrl',
    description: 'Mostra cotação atual de USD para BRL.',
    runner: usdToBrl,
  },
  {
    command: 'husky_limit',
    description: 'Mostra Informaçóes sobre limite de recebimento da husky.',
    runner: huskyLimit,
  },
] as Command[];

commands.forEach(command => {
  bot.command(command.command, command.runner);
});

// bot.command('whoami', whoAmI);
// bot.command('ping', ping);
// bot.command('invoice_infos', invoiceInfos);
// bot.command('usdtobrl', usdToBrl);
// bot.command('husky_limit', huskyLimit);
