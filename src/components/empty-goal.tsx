import logo from '../assets/logo-in-orbit.svg'
import letsStartIllustration from '../assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
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
  )
}