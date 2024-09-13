export interface CreateGoalCompletionRequest {
  goalId: string
}

const API_URL = import.meta.env.VITE_API_URL

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest): Promise<void> {
  const response = await fetch(`${API_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })

  if (!response.ok) {
    throw new Error('Error while creating the goal completion')
  }
}
