import { PREFIX } from "../../constants/servicePrefix";
import { v4 as uuidv4 } from 'uuid';

export const Select = ({
  label = 'Поле для выбора',
  data = [{ value: 'example', label: 'Выберите вариант', selected: true }],
  required = true,
}) => {
  const id = uuidv4();

  return (
    <div className={PREFIX + 'selector'}>
    {label && <label for={id}>
      <span>{label}</span>
      {required && <span>*</span>}
    </label>}
      <select id={id}>
        {data.map(({ label, value, selected }) => {
          return (
            <option value={value} label={label} selected={selected}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};