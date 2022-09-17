import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { ITask } from '../../pages/Home'

import styles from "./styles.module.css";

interface TaskProps {
  task: ITask
  onToggleCompleted: (id: string) => void
  onRemove: (id: string) => void
}

export function Task({task, onToggleCompleted, onRemove}: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onToggleCompleted(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button onClick={() => onRemove(task.id)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
