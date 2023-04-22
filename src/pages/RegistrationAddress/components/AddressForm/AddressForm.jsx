import './AddressForm.scss';
import { Select, Input } from "../../../../components";
import { PREFIX } from '../../../../constants/servicePrefix';

export const AddressForm = () => {
  return (
    <div className={PREFIX + 'address-form'}>
      <div className='big-columns-container'>
        <Select 
          label="Страна"
          data={[
            { value: 'ru', label: 'Россия' },
            { value: 'fr', label: 'Франция' },
          ]}
        />
        <Select 
          label="Регион"
          data={[
            { value: 'select', label: 'Выберите регион' },
          ]}
        />
      </div>
      <div className='big-columns-container'>
        <Input
          label="Город / Населенный пункт" 
          placeholder="Введите населенный пункт" 
        />
        <Input
          label="Улица" 
          placeholder="Введите улицу" 
        />
      </div>
      <div className='big-columns-container'>
        <div className="small-columns">
          <Input
            type="number"
            label="Дом" 
            placeholder="0" 
          />
          <Input
            type="number"
            label="Квартира" 
            placeholder="0" 
          />
        </div>
        {/* TODO: добавить здесь чек-бокс Нет квартиры */}
        <Input
          className="registration-date"
          type="date"
          label="Дата прописки"
        />
      </div>
    </div>
  );
};