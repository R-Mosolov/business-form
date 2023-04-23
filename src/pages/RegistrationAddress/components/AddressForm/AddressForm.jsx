import './AddressForm.scss';
import { Select, Input } from "../../../../components";
import { PREFIX } from '../../../../constants/servicePrefix';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../../../store/reducers/global';
import { navigation } from '../../../../data';
import { REGISTRATION_ADDRESS } from '../../../../constants/pages';

export const AddressForm = () => {
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const isRegistationAddress = path === navigation
    .find(({ id }) => id === REGISTRATION_ADDRESS).path;
  const addressId = (isRegistationAddress ? 'registrationAddress' : 'residenceAddress');
  const address = useSelector(({ global }) => global[addressId]);
  const {
    cityOrProvince,
    streetName,
    streetNumber,
    flatNumber,
  } = address;

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
          value={cityOrProvince || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: addressId,
              data: { cityOrProvince: target.value } 
            })
          )} 
        />
        <Input
          label="Улица" 
          placeholder="Введите улицу" 
          value={streetName || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: addressId,
              data: { streetName: target.value } 
            })
          )}
        />
      </div>
      <div className='big-columns-container'>
        <div className="small-columns">
          <Input
            type="number"
            label="Дом" 
            placeholder="0" 
            value={streetNumber || ''}
            onChange={({ target }) => dispatch(
              setData({ 
                page: addressId,
                data: { streetNumber: target.value } 
              })
            )}
          />
          <Input
            type="number"
            label="Квартира" 
            placeholder="0"
            value={flatNumber || ''}
            onChange={({ target }) => dispatch(
              setData({ 
                page: addressId,
                data: { flatNumber: target.value } 
              })
            )}
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