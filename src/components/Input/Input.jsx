import { PREFIX } from "../../constants/servicePrefix";
import { v4 as uuidv4 } from 'uuid';
import './Input.styles.scss';

export const Input = ({ 
  label,
  type = 'text',
  placeholder = 'Поле для ввода', 
  required = true 
}) => {
  const id = uuidv4();

  return (
    <div className={PREFIX + 'input'}>
      {label && <label htmlFor={id}>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>}
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};