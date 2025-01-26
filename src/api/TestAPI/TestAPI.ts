import client from '../client';
import { mockTest, mockTestResult } from './TestAPI.mock';

import type { Test } from '@/types/test';
import type { TestResult, TestResultPreview } from '@/types/result';

class TestAPI {
  public static getUserTest = async (): Promise<Test> => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return mockTest;

    const response = await client.get('/test');
    return response.data;
  };

  public static getTestResult = async (resultId: string): Promise<{ results: TestResult; test: Test }> => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });

    return {
      results: mockTestResult,
      test: mockTest,
    };

    const response = await client.get(`/test/result/${resultId}`);
    return response.data;
  };

  public static getAllResults = async (): Promise<TestResultPreview[]> => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });

    return [mockTestResult, mockTestResult];

    const response = await client.get('/test/result');
    return response.data;
  };

  public static submitTest = async (answers: any): Promise<string> => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });

    return 'resultId';

    await client.post('/test', answers);
  };
}

export default TestAPI;
