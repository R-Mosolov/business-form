import { PREFIX } from "../../constants/servicePrefix";

export const Input = ({ 
  title,
  type = 'text',
  placeholder = 'Поле для ввода', 
  required = true 
}) => {
  return (
    <div className={PREFIX + 'input'}>
      <p className="caption">
        <span>{title}</span>
        {required && <span>*</span>}
      </p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};