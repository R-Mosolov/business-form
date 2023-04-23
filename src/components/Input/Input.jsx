import './Input.scss';
import { PREFIX } from "../../constants/servicePrefix";
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

export const Input = ({ 
  className,
  label,
  type = 'text',
  value = '',
  placeholder = 'Поле для ввода', 
  required = true,
  onChange,
  onBlur,
}) => {
  const id = uuidv4();

  return (
    <div className={cn(
      PREFIX + 'input',
      { [className]: className }
    )}>
      {label && <label htmlFor={id}>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>}
      <input 
        id={id} 
        type={type} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
        onBlur={onBlur} 
      />
    </div>
  );
};