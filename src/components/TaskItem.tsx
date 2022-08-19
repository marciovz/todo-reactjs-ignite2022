import { Trash} from 'phosphor-react';

import { CheckBox } from './CheckBox';

import styles from './TaskItem.module.css';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

interface ITaskItemProps {
  task: ITask;
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

export function TaskItem({task, onToggleTask, onRemoveTask }: ITaskItemProps) {

  const handleChangeCheckBox = () => {
    onToggleTask(task.id);
  }

  const handleClickButton = () => {
    onRemoveTask(task.id);
  }

  return(
    <div className={styles.task} key={task.id}>
      <CheckBox checked={task.done} onChange={handleChangeCheckBox} />
      <p className={task.done ? styles.taskDone : ''}>{task.title}</p>
      <button 
        type="button"
        className={styles.trashButton}
        onClick={handleClickButton}
      >
        <Trash />
      </button>
    </div>

  )
}
