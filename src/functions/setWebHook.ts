import { APIGatewayEvent } from 'aws-lambda';
import { bot } from '../initializers/bot';

export const run = async (event: APIGatewayEvent) => {
  const response = {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: 'Not Found',
  };

  const webhookUrl = `https://${event.headers.Host}/${event.requestContext.stage}/webhook`;

  try {
    // TODO: Refactor to avoid re-run yarn dev
    if (process.env.NODE_ENV === 'development') {
      bot.launch();
    } else {
      await bot.telegram.setWebhook(webhookUrl);
    }

    response.statusCode = 200;
    response.body = JSON.stringify({ url: webhookUrl });
  } catch (err) {
    console.log(err);
  }

  return response;
};
