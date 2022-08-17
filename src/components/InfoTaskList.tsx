
import { useMemo } from 'react';
import styles from './InfoTaskList.module.css';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

interface InfoTaskProps {
  tasks: ITask[];
}

export function InfoTaskList({tasks}: InfoTaskProps) {

  const tasksCompleted = useMemo( () => {
    return tasks.reduce((acc, task ) => {
      if (task.done) return acc + 1;
      return acc;
    }, 0)},
    [tasks]
  )
  
  return (
    <div className={styles.infoTasks}>
      <div className={styles.infoCreated}>
        <p>Tarefas criadas</p>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.infoCompleted}>
        <p>Concluídas</p>
        {
          tasksCompleted !== tasks.length 
          ? ( <span>{`${tasksCompleted} de ${tasks.length}`}</span> ) 
          : ( <span>{tasks.length}</span>)
        }
        
      </div>
    </div>
  )
}