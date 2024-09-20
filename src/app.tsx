
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goal'
import { Dialog } from './components/ui/dialog'

export function App() {

  return (
    <Dialog>
      <EmptyGoals />
      <CreateGoal />
    </Dialog>
  )
}