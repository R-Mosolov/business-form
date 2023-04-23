import { useSelector, useDispatch } from 'react-redux';
import { PREFIX } from "../../../constants/servicePrefix";
import { Checkbox, File, Input } from "../../../components";
import { setData } from '../../../store/reducers/global';

export const IndividualEntrepreneur = () => {
  const dispatch = useDispatch();
  const { ownershipForm } = useSelector(({ global }) => global);
  const {
    inn,
    ie
  } = ownershipForm;

  return (
    <div className={PREFIX + 'individual-entrepreneur'}>
      <div className="universal-row-container">
        <Input 
          className="mini-field" 
          label="ИНН" 
          type="number"
          placeholder="хххххххххх" 
          value={inn || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'ownershipForm', data: { inn: target.value } })
          )} 
        />
        <File label="Скан ИНН" />
        <Input
          className="mini-field"
          type="date"
          label="Дата регистрации"
        />
      </div>
      <div className="universal-row-container">
        <Input 
          className="ogrnip" 
          label="ОГРНИП" 
          type="number"
          placeholder="ххххххххххххххх"
          value={ie.ogrnip || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { ie: { ...ie, ogrnip: target.value } } 
            })
          )} 
        />
        <File label="Скан ОГРНИП" />
      </div>
      <div className="universal-row-container scans-container">
        <File label="Скан договора аренды помещения (офиса)" />
        <File label="Скан выписки из ЕГРИП (не старше 3 месяцев)" />
      </div>
      <Checkbox className="no-contract" label='Нет договора' />
    </div>
  );
};