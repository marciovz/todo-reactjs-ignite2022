import { useState } from 'react';
import { Circle, CheckCircle } from 'phosphor-react';

import style from './CheckBox.module.css';

interface ICheckBoxProps {
  checked: boolean;
  onChange: () => void;
}

export function CheckBox({ checked, onChange }: ICheckBoxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange();
  }

  return (
    <label className={style.checkbox} >
      {isChecked 
        ? <CheckCircle className={style.checked} /> 
        : <Circle />
      }

    <input
      type="checkbox"
      onChange={handleChange}
      />
    </label>
  )
}