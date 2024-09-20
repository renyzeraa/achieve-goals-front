import logo from './assets/logo-in-orbit.svg'
import letsStartIllustration from './assets/lets-start-illustration.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './components/ui/radio-group'
import { useEffect, useState } from 'react'

export function App() {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const smallWindow = windowHeight < 680

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
    <Dialog>
      <div className="h-screen flex justify-center flex-col items-center gap-8">
        <img src={logo} alt="Logo do site" />
        <img src={letsStartIllustration} alt="Ilustração para iniciar suas metas" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal <span className='underline'>cadastrar um</span> agora mesmo?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className='size-4' />
            <span>Cadastrar meta</span>
          </Button>
        </DialogTrigger>
      </div>
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
          <form action="" className='flex flex-1 flex-col justify-between'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='title'>Qual a atividade ?</Label>
                <Input id='title' placeholder='Correr, meditar, Ler' type='text' autoFocus />
              </div>
              <div className='flex flex-col gap-2'>
                <Label>Quantas vezes na semana ?</Label>
                <RadioGroup style={smallWindow ? { flexWrap: 'wrap', flexDirection: 'row' } : {}}>
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
    </Dialog>
  )
}