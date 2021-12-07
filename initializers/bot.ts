import { Telegraf } from 'telegraf';
import { help, whoAmI, ping, invoiceInfos } from '../commands';

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

bot.command('whoami', whoAmI);
bot.command('ping', ping);
bot.command('invoice_infos', invoiceInfos);
