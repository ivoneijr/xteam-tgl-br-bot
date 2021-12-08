import { APIGatewayEvent } from 'aws-lambda';
import { bot } from '../initializers/bot';

export const run = async (event: APIGatewayEvent) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: '',
  };

  if (!event.body) {
    return response;
  }

  try {
    const update = JSON.parse(event.body);
    await bot.handleUpdate(update);
  } catch (err) {
    console.log(err);
  }

  return response;
};
