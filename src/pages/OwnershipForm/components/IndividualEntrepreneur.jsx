import { useSelector, useDispatch } from 'react-redux';
import { PREFIX } from "../../../constants/servicePrefix";
import { Checkbox, File, Input } from "../../../components";
import { setData } from '../../../store/reducers/global';

export const IndividualEntrepreneur = () => {
  const dispatch = useDispatch();
  const { ownershipForm } = useSelector(({ global }) => global);
  const {
    inn,
    registrationDate,
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
        <File
          label="Скан ИНН"
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  ie: {
                    ...ie,
                    files: {
                      ...ie.files,
                      inn: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }} 
        />
        <Input
          className="mini-field"
          type="date"
          label="Дата регистрации"
          value={registrationDate}
          onChange={({ target }) => dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { registrationDate: target.value } 
            })
          )} 
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
        <File 
          label="Скан ОГРНИП" 
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  ie: {
                    ...ie,
                    files: {
                      ...ie.files,
                      ogrnip: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }} 
        />
      </div>
      <div className="universal-row-container scans-container">
        <File 
          label="Скан договора аренды помещения (офиса)" 
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  ie: {
                    ...ie,
                    files: {
                      ...ie.files,
                      leaseContract: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }} 
        />
        <File 
          label="Скан выписки из ЕГРИП (не старше 3 месяцев)" 
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  ie: {
                    ...ie,
                    files: {
                      ...ie.files,
                      egrip: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }} 
        />
      </div>
      <Checkbox 
        className="no-contract" 
        label='Нет договора' 
        onChange={() => {
          dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { ...ownershipForm, ie: { hasContract: !ie.hasContract } } 
            })
          );
        }}
      />
    </div>
  );
};