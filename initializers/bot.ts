import { Telegraf } from 'telegraf';
import { whoAmI } from '../commands';
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

bot.help(ctx => {
  return ctx.replyWithMarkdown(`The bot just repeats anything you say in the chat.
  \n*Command reference:*
      /ping - *Pong!*
      /whoami - Informações sobre você.
      /help - Mostra essa mensagem.`);
});

bot.command('whoami', whoAmI);

bot.command('ping', ctx => {
  return ctx.replyWithMarkdown('*Pong!*');
});

bot.command('hello', ctx => {
  return ctx.replyWithMarkdown('*worldsssss!!!!*');
});

// bot.on('text', ctx => {
//   return ctx.reply(ctx.message.text);
// });
