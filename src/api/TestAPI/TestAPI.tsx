import client from '../client';

import type { Test } from '@/types/test';

class TestAPI {
  public static getUserTest = async (): Promise<Test> => {
    // wait for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    return '';

    const response = await client.get('/test');
    return response.data;
  };
}

export default TestAPI;
