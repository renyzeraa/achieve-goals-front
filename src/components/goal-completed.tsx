import { deleteGoal } from "@/http/delete-goal";
import { useQueryClient } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";

interface GoalCompletedProps {
  name: string
  completedAt: string
  id: string
  completedId: string
}

export function GoalCompleted({ completedAt, name, id, completedId }: GoalCompletedProps) {
  const queryClient = useQueryClient()

  async function deleteGoalCompleted() {
    const response = await deleteGoal({ goalId: completedId })
    console.log(response)
    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <li key={id} className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-pink-500" />
      <span className="text-sm text-zinc-400">
        Você completou "<span className="text-zinc-100 font-medium">{name}</span>" às <span className="text-zinc-100">{completedAt}</span>
      </span>
      <button onClick={async () => deleteGoalCompleted()} type="button" className="text-xs underline text-zinc-600">Desfazer</button>
    </li>
  )
}