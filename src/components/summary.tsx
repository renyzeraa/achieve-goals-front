import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";
import { GoalCompleted } from "./goal-completed";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../http/get-summary";

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 60 * 1000,
  })

  return (
    <div className="py-10 max-w-[440px] mx-auto flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className='size-4' />
            <span>Cadastrar meta</span>
          </Button>
        </DialogTrigger>
      </header >

      <div className="flex flex-col gap-3">
        <Progress max={22} value={8}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Você completou <span className="text-zinc-100">8</span> de <span className="text-zinc-100">15</span> metas nessa semana. </span>
          <span>58%</span>
        </div>
      </div>

      <Separator />

      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4 text-zinc-400" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-400" />
          Correr na Avenida
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-400" />
          Ler
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-400" />
          Estudar TypeScript
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        <span className="text-sm text-zinc-400">Você ainda não completou nenhuma meta essa semana.</span>

        <div className="flex flex-col gap-4">
          <h3 className="font-medium">Domingo <span className="text-zinc-400 text-xs">(10 de Novembro)</span></h3>
          <ul className="flex flex-col gap-3">
            <GoalCompleted id="1" name="Alongar" completedAt="06:40h" />
            <GoalCompleted id="2" name="Meditar" completedAt="08:15h" />
            <GoalCompleted id="3" name="Correr na Avenida" completedAt="13:00h" />
            <GoalCompleted id="4" name="Ler" completedAt="14:30h" />
          </ul>
        </div>
      </div>
    </div >
  )
}