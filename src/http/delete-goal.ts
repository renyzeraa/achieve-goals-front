type DeleteGoalForm = {
  goalId: string
}

export async function deleteGoal({ goalId }: DeleteGoalForm) {
  const response = await fetch('http://localhost:3333/goal', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ goalId }),
  })
  return response
}