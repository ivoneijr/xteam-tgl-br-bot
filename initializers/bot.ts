import { Telegraf } from 'telegraf';
export const bot = new Telegraf(process.env.BOT_TOKEN!, {
  telegram: { webhookReply: true },
});

const helpMsg = `The bot just repeats anything you say in the chat.
\n*Command reference:*
    /start - Start bot
    /ping - *Pong!*
    /whoami - Show information about the current user
    /help - Show this help page.`;

bot.start(ctx => {
  return ctx.reply(
    `Hello from AWS Lambda, ${
      ctx.from.first_name ? ctx.from.first_name : 'friend'
    }! Use /help to view available commands.`,
  );
});

bot.help(ctx => {
  return ctx.replyWithMarkdown(helpMsg);
});

bot.command('whoami', ctx => {
  const userInfo = JSON.stringify(ctx.from);
  return ctx.reply(`User info: ${userInfo}`);
});

bot.command('ping', ctx => {
  return ctx.replyWithMarkdown('*Pong!*');
});

bot.command('hello', ctx => {
  return ctx.replyWithMarkdown('*worldsssss!*');
});

bot.on('text', ctx => {
  return ctx.reply(ctx.message.text);
});
