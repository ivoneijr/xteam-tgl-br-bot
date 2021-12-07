export const whoAmI = ctx => {
  const userInfo = JSON.stringify(ctx.from);

  return ctx.reply(`User info: ${userInfo}`);
};
