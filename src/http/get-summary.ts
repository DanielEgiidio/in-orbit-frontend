export interface GetSummaryResponse {
  summary: {
    completed: number
    total: number
    goalsPerDay: Record<
      string,
      {
        id: string
        title: string
        createdAt: string
      }[]
    >
  }
}

const API_URL = import.meta.env.VITE_API_URL

export async function getSummary(): Promise<GetSummaryResponse> {
  const response = await fetch(`${API_URL}/summary`)
  const data = await response.json()

  return data
}
