import { Context } from 'telegraf';
export interface Command {
  command: string;
  description: string;
  handler: (ctx: Context) => Promise<void>;
}
