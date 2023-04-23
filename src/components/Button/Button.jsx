import './Button.scss';
import { PREFIX } from '../../constants/servicePrefix';
import cn from 'classnames';
import { PlusIcon } from '../../assets';

export const Button = ({
  className,
  children = 'Кнопка',
  secondary = false,
  disabled = false,
  isSocialLinksButton = false,
  onClick
}) => {
  if (isSocialLinksButton) {
    return (
      <button
        className={cn(
          { [PREFIX + 'social-links-button']: isSocialLinksButton },
          { [className]: className }
        )}
        onClick={onClick}
      >
        <span>
          <img alt="Иконка добавления" src={PlusIcon}></img>
        </span>
        <span className='text'>{children}</span>
      </button>
    );
  }

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