import { CALL_API } from '../middleware/api';

export function test() {
  return {
    [CALL_API]: {
      endpoint: '/test',
    },
  };
}
