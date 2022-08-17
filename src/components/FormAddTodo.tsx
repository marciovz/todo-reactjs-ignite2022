import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './FormAddTodo.module.css';

interface IFormAddTodoProps {
  onSubmit: (title: string) => void;
}

export function FormAddTodo({onSubmit}: IFormAddTodoProps) {
  const [title, setTitle] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === '') return;
    setIsSubmiting(true);
    onSubmit(title);
    setTitle('');
    setIsSubmiting(false);
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  return(
    <form 
      className={styles.formContainer}
      onSubmit={handleSubmit}  
    >
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        onChange={handleChangeInput}
        value={title}
      />

      <button
        type='submit'
        disabled={ title=='' || isSubmiting }
      >
       Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}