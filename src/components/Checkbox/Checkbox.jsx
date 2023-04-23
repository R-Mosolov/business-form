import { PREFIX } from '../../constants/servicePrefix';
import { v4 as uuidv4 } from 'uuid';
import './Checkbox.scss';
import cn from 'classnames';

export const Checkbox = ({
  className,
  label = 'Пункт для выбора',
  onChange,
}) => {
  const id = uuidv4();

  return (
    <div className={cn(
      PREFIX + 'checkbox',
      { [className]: className }
    )}>
      <input id={id} type='checkbox' onChange={onChange} />
      {label && <label htmlFor={id}>
        <span>{label}</span>
      </label>}
    </div>
  );
};