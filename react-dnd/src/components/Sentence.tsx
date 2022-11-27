import { Item } from "@/types";
import { useState } from "react";
import { useDrop } from "react-dnd";
import type { Identifier } from 'dnd-core';
import Word from "./Word";

interface SentenceProps {  };

const Sentence: React.FC<SentenceProps> = () => {
  const [words, setWords] = useState<string[]>([]);

  const [{ isOver, source }, drop] = useDrop<Item, void, { isOver: boolean, source: Identifier | null }>(() => ({
      accept: 'word',
      collect: monitor => ({
        isOver: monitor.isOver(),
        source: monitor.getHandlerId()
      }),
      drop: ({ word, dragSource }, monitor) => {
        if (dragSource == monitor.getHandlerId()) return; // prevent if dropping from the same dragsource
        setWords(w => [...w, word])
      }
    })
  )

  return (
    <div className={`sentence ${isOver ? 'is-over' : ''}`} ref={drop}>
      {words.map((word, i) => <Word key={i} word={word} dragSource={source as string} />)}
    </div>
  )
}

export default Sentence;
