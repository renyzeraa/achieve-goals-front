import logo from './assets/logo-in-orbit.svg'
import letsStartIllustration from './assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex justify-center flex-col items-center gap-8">
      <img src={logo} alt="Logo do site" />
      <img src={letsStartIllustration} alt="Ilustração para iniciar suas metas" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal <span className='underline'>cadastrar um</span> agora mesmo?
      </p>
      <button type='button' className="flex items-center focus-visible:outline-violet-900 text-violet-50 gap-2 py-2.5 px-4 rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors text-sm font-medium tracking-tight">
        <Plus className='size-4' />
        <span>Cadastrar meta</span>
      </button>
    </div>
  )
}