import { Item } from "@/types";
import { useDrag } from "react-dnd";

interface WordProps { word: string, dragSource?: string, cleanup?: () => void, draggable?: boolean };

const Word: React.FC<WordProps> = ({ word, dragSource, cleanup, draggable = true }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'word',
    collect: (monitor) => ({ isDragging: monitor.isDragging()}),
    item: (): Item => ({ word, dragSource }),
    end: (item, monitor) => { if (cleanup && monitor.didDrop()) cleanup() },
  }))

  return (
    <div className={`word ${isDragging ? 'is-dragging' : ''}`} ref={drag}>
      { word }
    </div>
  )
}

export default Word;
