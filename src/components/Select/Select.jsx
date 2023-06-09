import { PREFIX } from "../../constants/servicePrefix";
import { v4 as uuidv4 } from 'uuid';
import './Select.scss';
import cn from 'classnames';

export const Select = ({
  className,
  label,
  data = [{ value: 'example', label: 'Выберите вариант' }],
  required = true,
  onChange,
}) => {
  const id = uuidv4();

  return (
    <div className={cn(
      PREFIX + 'select',
      { [className]: className }
    )}>
    {label && <label htmlFor={id}>
      <span>{label}</span>
      {required && <span>*</span>}
    </label>}
      <select id={id} defaultValue={data[0]} onChange={onChange}>
        {data.map(({ label, value }, index) => {
          return (
            <option key={index} value={value} label={label}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};