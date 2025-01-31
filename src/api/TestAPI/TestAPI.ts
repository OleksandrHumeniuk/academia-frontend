import client from '../client';
import { mockTest, mockTestResult } from './TestAPI.mock';

import type { Test } from '@/types/test';
import type { TestResult, TestResultPreview } from '@/types/result';

class TestAPI {
  public static getUserTest = async (): Promise<Test> => {
    const response = await client.get('/test');
    return response.data;
  };

  public static getTestResult = async (resultId: string): Promise<{ results: TestResult; test: Test }> => {
    // await new Promise(resolve => {
    //   setTimeout(resolve, 2000);
    // });

    // return {
    //   results: mockTestResult,
    //   test: mockTest,
    // };

    const response = await client.get(`/test/result/${resultId}`);
    return response.data;
  };

  public static getAllResults = async (): Promise<TestResultPreview[]> => {
    const response = await client.get('/test/result'); // fix this
    return response.data;
  };

  public static submitTest = async (answers: any): Promise<any> => {
    await client.post('/test/answers', answers);
    return 'resultId';
  };
}

export default TestAPI;
