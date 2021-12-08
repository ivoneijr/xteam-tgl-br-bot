import { Telegraf } from 'telegraf';
import { help } from '../commands';
import { commands } from './definition';

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

commands.forEach(command => {
  bot.command(command.command, command.runner);
});
