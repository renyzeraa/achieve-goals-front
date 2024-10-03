export type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<string, {
    goalCompletedId: string;
    completedAt: string;
    title: string;
    id: string;
  }[]>;
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()
  return data.summary
}