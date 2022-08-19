import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

import { FormAddTodo } from './FormAddTodo';
import { InfoTaskList } from './InfoTaskList';
import { TaskItem } from './TaskItem';
import ClipBoard from '../assets/Clipboard.svg';

import styles from './TaskList.module.css';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([])
    
  const handleAddTask = (title: string ) => {
    setTasks(() => [
      ...tasks,
      {
        id: uuidV4(),
        title,
        done: false
      }
    ])
  }

  const handleToggleDoneTask = (id: string) => {
    let newTaskList = [...tasks];
    const index = newTaskList.findIndex(task => task.id === id);
    newTaskList[index].done = !newTaskList[index].done;
    setTasks(newTaskList);
  }

  const handleRemoveTask = (id: string) => {
    let newTaskList = [...tasks];
    const index = newTaskList.findIndex(task => task.id === id);
    newTaskList.splice(index, 1);
    setTasks(newTaskList);
  }

  return (
    <section className={styles.container}>

      <FormAddTodo onSubmit={handleAddTask}/>

      <InfoTaskList tasks={tasks}/>

      <main className={styles.taskList}>
        {
          tasks.length === 0 
            ? (
              <div className={styles.emptyTaskList}>
                <img src={ClipBoard} alt="icone clipboard" />
                
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ) 
            : (
              tasks.map(task => ( 
                <TaskItem 
                  key={task.id}
                  task={task} 
                  onToggleTask={handleToggleDoneTask} 
                  onRemoveTask={handleRemoveTask}
                /> 
              ))
            )

        }
      </main>

    </section>
  )
}
