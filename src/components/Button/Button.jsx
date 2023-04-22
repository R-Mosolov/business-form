import './Button.styles.scss';
import { PREFIX } from '../../constants/servicePrefix';
import cn from 'classnames';

export const Button = ({
  children = 'Кнопка',
  secondary = false,
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={cn(
        PREFIX + 'button',
        { 'secondary': secondary },
        { 'disabled': disabled }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};