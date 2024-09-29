import { Board } from '@/components/board'
import './realtime'

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen justify-center">
      <header className="w-full flex justify-center mb-20">
        <h1>Welcome to Tic-Tac-Toe</h1>
      </header>

      <Board />
    </main>
  )
}
