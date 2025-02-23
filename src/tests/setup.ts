import { setupServer } from 'msw/node';
import { handlers } from './handlers';
import { beforeAll, afterAll, afterEach } from 'vitest';
export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
