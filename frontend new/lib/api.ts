// APIとの連携用関数

export interface CounterData {
  organizationCount: number
  studentCount: number
  partnerCount: number
}

// 実際のAPIエンドポイントに置き換える
const API_URL = "/api/counter"

export async function fetchCounterData(): Promise<CounterData> {
  try {
    // 実際のAPIが実装されるまでのモックデータ
    // 本番環境では実際のAPIエンドポイントからデータを取得
    const mockData: CounterData = {
      organizationCount: 150,
      studentCount: 5000,
      partnerCount: 50,
    }

    // 実際のAPIが実装されたらこのコメントを解除
    // const response = await fetch(API_URL);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch counter data');
    // }
    // return await response.json();

    return mockData
  } catch (error) {
    console.error("Error fetching counter data:", error)
    // エラー時のフォールバックデータ
    return {
      organizationCount: 100,
      studentCount: 3000,
      partnerCount: 30,
    }
  }
}
