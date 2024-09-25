import type { CreateGoalForm } from "../components/create-goal";

export async function createGoal({ desiredWeeklyFrequency, title }: CreateGoalForm) {
  const response = await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ desiredWeeklyFrequency, title }),
  })
  return response
}