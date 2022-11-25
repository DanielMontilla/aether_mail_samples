import React, { Children, FC, forwardRef } from 'react'
import { useState, useRef } from 'react'
import './styles/app.css'
import { words as myWords } from './words'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

type Word = typeof myWords[number];
type Words = typeof myWords;

const App = () => {
  const [words, setWords] = useState<Words>(myWords);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    let arr = words;

    const el = arr.splice(source.index, 1)[0];
    arr.splice(destination.index, 0, el);
    
    setWords(arr);
  }

  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='repo' direction='vertical'>
          {
            provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {
                  words.map((w, i) => (
                    <Draggable key={w.id} draggableId={w.id.toString()} index={i}>
                      {
                        provided => (
                          <div ref={provided.innerRef} className="word"
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            {w.word}
                          </div>
                        )
                      }
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </main>
  )
}

export default App
