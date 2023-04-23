import { useRef } from 'react';
import './File.scss';
import { PREFIX } from '../../constants/servicePrefix';
import { useCallback } from 'react';
import { UploadIcon } from '../../assets';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

export const File = ({
  className,
  label = 'Поле для файла', 
  required = true,
  onChange,
}) => {
  const id = uuidv4();
  const ref = useRef();
  const openUploadWindow = useCallback(() => {
    ref.current.click();
  }, []);

  return (
    <div className={cn(
      PREFIX + 'file',
      { [className]: className }
    )} onClick={openUploadWindow}>
      {label && <label htmlFor={id}>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>}

      <div className='uploader-container'>
        <div className='uploader-input'>
          <div>Выберите или перетащите файл</div>
          <div className='icon-container'>
            <img alt="Иконка загрузки" src={UploadIcon} />
          </div>
        </div>

        <input 
          ref={ref}
          className='input' 
          hidden 
          type="file"
          id={id}
          name={id}
          accept="image/png, image/jpeg, application/pdf" 
          onChange={onChange}
        />
      </div>
    </div>
  );
};