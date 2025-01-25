import client from '../client';

// БОЖЕ ЯК ЖЕ Я ЛЮБЛЮ ЩЕ ЖИТТЯ, ХОЧЕТЬСЯ ПРЯМ НА БАЛКОНІ РИГАРЬ І ЦІЛУВАТИСЬ В РОТА

class AuthAPI {
  public static login = async (email: string, password: string): Promise<any> => {
    const response = await client.post('/api/auth/login', { email, password });
    return response.data;
  };
}

export default AuthAPI;
