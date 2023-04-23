import { useSelector, useDispatch } from 'react-redux';
import { PREFIX } from "../../../constants/servicePrefix";
import { Input, File } from "../../../components";
import { useCallback } from "react";
import { getInfoByInn } from "../../../services/getInfoByInn";
import { setData } from '../../../store/reducers/global';

export const LimitedLiabilityCompany = () => {
  const dispatch = useDispatch();
  const { ownershipForm } = useSelector(({ global }) => global);
  const {
    inn,
    registrationDate,
    llc
  } = ownershipForm;

  const handleBlur = useCallback(() => {
    getInfoByInn(
      inn, 
      ({ fullName, shortName, ogrn, registrationDate }) => dispatch(setData({ 
        ...ownershipForm, 
        registrationDate,
        llc: {
          fullName,
          shortName,
          ogrn,
        } 
      }))
    );
  }, [inn]);

  return (
    <div className={PREFIX + 'limited-liability-company'}>
      <div className="universal-row-container">
        <Input 
          className="full-name"
          label="Наименование полное" 
          placeholder="ООО «Московская промышленная компания»" 
          value={llc?.fullName || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { llc: { ...llc, fullName: target.value } } 
            })
          )} 
        />
        <Input 
          className="mini-field"
          label="Сокращение" 
          placeholder="ООО «МПК»" 
          value={llc?.shortName || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { llc: { ...llc, shortName: target.value } } 
            })
          )} 
        />
      </div>
      <div className="universal-row-container">
        <Input
          className="mini-field"
          type="date"
          label="Дата регистрации" 
          value={registrationDate || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'ownershipForm', data: { registrationDate: target.value } })
          )} 
        />
        <Input 
          className="mini-field" 
          label="ИНН" 
          type="number"
          placeholder="хххххххххх" 
          value={inn || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'ownershipForm', data: { inn: target.value } })
          )} 
          onBlur={handleBlur}
        />
        <File 
          label="Скан ИНН" 
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  llc: {
                    ...llc,
                    files: {
                      ...llc.files,
                      inn: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }}
        />
      </div>
      <div className="universal-row-container">
        <Input 
          className="mini-field" 
          label="ОГРН" 
          type="number"
          placeholder="ххххххххххххх" 
          value={llc?.ogrn || ''}
          onChange={({ target }) => dispatch(
            setData({ 
              page: 'ownershipForm', 
              data: { llc: { ...llc, ogrn: target.value } } 
            })
          )} 
        />
        <File 
          className="ogrn" 
          label="Скан ОГРН" 
          onChange={(event) => {
            dispatch(
              setData({ 
                page: 'ownershipForm', 
                data: { 
                  ...ownershipForm,
                  llc: {
                    ...llc,
                    files: {
                      ...llc.files,
                      ogrn: 'https://some-public-host.ru/' 
                        + event.target.files[0].name.replaceAll(' ', '_')
                    }
                  } 
                }
              })
            );
          }}
        />
      </div>
    </div>
  );
};