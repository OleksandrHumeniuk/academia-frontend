import client from '../client';

import type { Practice } from '@/types/practice';

class PracticeAPI {
  public static getUserPractice = async (): Promise<Practice> => {
    // wait for 2 seconds
    await new Promise(resolve => {
      setTimeout(resolve, 2000)
    });
    return '';

    const response = await client.get('/test');
    return response.data;
  };
}

export default PracticeAPI;
