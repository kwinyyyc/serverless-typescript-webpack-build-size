import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { v4 as uuidv4 } from "uuid";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const uuid = uuidv4();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Yeah! you generated the new uuid! ${uuid}`,
        input: event,
      },
      null,
      2
    ),
  };
};
