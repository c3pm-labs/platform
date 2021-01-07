import { setupServer, SetupServerApi } from 'msw/node';
import { rest } from 'msw';

export const setupMockServer = (): SetupServerApi => setupServer(
  rest.post('http://localhost:4444/v1', (req, res, ctx) => {
    res(ctx.json({ success: true }));
  }),
);
