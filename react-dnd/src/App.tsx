import randWord from 'random-words'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Word from './components/Word'
import Sentence from './components/Sentence'
import { useState } from 'react'

let _next = 0;

const App: React.FC = () => {

  const [available, setAvailable] = useState<{word: string, id: number}[]>([...Array(25)].map(() => ({word: randWord(1)[0], id: _next++})))

  const remove = (id: number) => {
    setAvailable(arr => arr.filter(i => i.id !== id));
  }

  const save = () => {

  }

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <div className="word-bank">
          {available.map(({word, id}) => <Word key={id} word={word} cleanup={() => remove(id)} />)}
        </div>
        <Sentence/>
      </DndProvider>
    </main>
  )
}

export default App
