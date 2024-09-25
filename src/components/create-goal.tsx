import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "./ui/radio-group";
import { X } from "lucide-react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createGoal } from "../http/create-goal";
import { useQueryClient } from "@tanstack/react-query";

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

export type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const smallWindow = windowHeight < 680

  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <DialogContent>
      <section className='flex flex-col gap-6 h-full'>
        <header className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose title='Fechar'><X className='size-5 text-zinc-600' /></DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que <span className='underline'>te fazem bem</span> e que você quer continuar praticando toda semana.
          </DialogDescription>
        </header>
        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className='flex flex-1 flex-col justify-between'
        >
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='title'>Qual a atividade ?</Label>
              <Input id='title' placeholder='Correr, meditar, Ler' type='text' autoFocus {...register('title')} />
              {formState.errors.title && (
                <span className='text-red-500 text-sm'>{formState.errors.title.message}</span>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Quantas vezes na semana ?</Label>
              <Controller
                control={control}
                defaultValue={1}
                name="desiredWeeklyFrequency"
                render={({ field }) => {
                  return (
                    <RadioGroup onValueChange={field.onChange} value={String(field.value)} style={smallWindow ? { flexWrap: 'wrap', flexDirection: 'row' } : {}}>
                      <RadioGroupItem value="1" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>1x na semana</span>
                        <span className='text-lg leading-none'>🥱</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="2" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>2x na semana</span>
                        <span className='text-lg leading-none'>🙂</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>3x na semana</span>
                        <span className='text-lg leading-none'>😎</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="4" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>4x na semana</span>
                        <span className='text-lg leading-none'>😜</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="5" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>5x na semana</span>
                        <span className='text-lg leading-none'>🤨</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="6" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>6x na semana</span>
                        <span className='text-lg leading-none'>🤯</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="7" style={smallWindow ? { width: '50%', flex: '1 1 0%' } : {}}>
                        <RadioGroupIndicator />
                        <span className='text-zinc-300 text-sm font-medium leading-none'>Todos os dias na semana</span>
                        <span className='text-lg leading-none'>🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
              {formState.errors.desiredWeeklyFrequency && (
                <span className='text-red-500 text-sm'>{formState.errors.desiredWeeklyFrequency.message}</span>
              )}
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <DialogClose asChild>
              <Button type='button' className='flex-1' variant='secondary'>Fechar</Button>
            </DialogClose>
            <Button type='submit' className='flex-1'>Salvar</Button>
          </div>
        </form>
      </section>
    </DialogContent>
  )
}