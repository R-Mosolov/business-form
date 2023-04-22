import './File.scss';
import { PREFIX } from '../../constants/servicePrefix';
import { useCallback } from 'react';
import { UploadIcon } from '../../assets';

export const File = () => {
  const openUploadWindow = useCallback(() => {
    const buttonToUpload = document.querySelector('.bf-file .input');
    buttonToUpload.click();
  }, []);

  return (
    <div className={PREFIX + 'file'} onClick={openUploadWindow}>
      <div className='uploader-input'>
        <div>Выберите или перетащите файл</div>
        <div className='icon-container'>
          <img alt="Иконка загрузки" src={UploadIcon} />
        </div>
      </div>

      <input 
        className='input' 
        hidden 
        type="file"
        id="bf-file-uploader" 
        name="bf-file-uploader"
        accept="image/png, image/jpeg, application/pdf" 
      />
    </div>
  );
};