import client from '../client';

import type { Practice } from '@/types/practice';

class PracticeAPI {
  public static getUserPractice = async (practiceId: string): Promise<Practice> => {
    const response = await client.get('/practice', { params: { id: practiceId } });
    return response.data;
  };

  public static submitPracticeConversation = async (
    practiceId: string,
    history: { message: string; source: string }[],
    time: number,
  ): Promise<string> => {
    const response = await client.post('/practice/conversation', { practiceId, history, time });
    return response.data;
  };

  public static submitAnswer = async (section: string, topicName: string) => {
    const response = await client.post('/practice/answer', { topicName, section });
    return response.data;
  };

  public static generateTopic = async (section: string, prompt: string) => {
    const response = await client.post('/practice/topic', { section, prompt });
    return response.data;
  };
}

export default PracticeAPI;
