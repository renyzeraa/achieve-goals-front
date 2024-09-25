import { CheckCircle2 } from "lucide-react";

interface GoalCompletedProps {
  name: string;
  completedAt: string;
  id: string
}

export function GoalCompleted({ completedAt, name, id }: GoalCompletedProps) {
  async function deleteGoalCompleted() {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    }).finally(() => {
      alert(`Goal deleted, id => ${id}`);
    })
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