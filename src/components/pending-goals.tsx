import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../http/get-pending-goals";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 60 * 1000,
  })

  if (!data) return null

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)
    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data?.map(({ completionCount, desiredWeeklyFrequency, id, title }) =>
        <OutlineButton key={id} disabled={completionCount >= desiredWeeklyFrequency} onClick={() => handleCompleteGoal(id)}>
          <Plus className="size-4 text-zinc-400" />
          {title}
        </OutlineButton>
      )}
    </div>
  )
}