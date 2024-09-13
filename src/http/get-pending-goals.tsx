export interface GetPendingGoalsResponse {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

const API_URL = import.meta.env.VITE_API_URL

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
  const response = await fetch(`${API_URL}/pending-goals`)
  const data = await response.json()

  return data
}
