import client from '../client';
import { mockUser } from '@/api/AuthAPI/AuthAPI.mock';
import { mockTestResult } from '@/api/TestAPI/TestAPI.mock';

import type { UserData } from '@/types/user';

class AuthAPI {
  public static login = async (email: string, password: string): Promise<{ token: string; user: UserData }> => {
    const response = await client.post('/auth/login', { email, password });
    return response.data;
  };

  public static getMe = async (): Promise<UserData> => {
    console.log('Current token:', localStorage.getItem('token'));
    // todo
    // wait for 2 seconds
    // await new Promise(resolve => {
    //   setTimeout(resolve, 2000);
    // });

    // return {
    //   info: mockUser,
    //   results: mockTestResult,
    // };

    const response = await client.get('/auth/me'); //why api? 
    return response.data;
  };
}

export default AuthAPI;
