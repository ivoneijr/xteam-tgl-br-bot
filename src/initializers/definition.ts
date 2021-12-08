import { Command } from '../types';
import { whoAmI, ping, invoiceInfos, usdToBrl, huskyLimit } from '../commands';

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
