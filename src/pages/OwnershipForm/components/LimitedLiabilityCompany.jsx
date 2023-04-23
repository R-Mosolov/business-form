import { PREFIX } from "../../../constants/servicePrefix";
import { Input, File } from "../../../components";
import { useCallback, useState } from "react";
import { getInfoByInn } from "../../../services/getInfoByInn";

export const LimitedLiabilityCompany = () => {
  const [data, setData] = useState({
    inn: '',
    fullName: '',
    shortName: '',
    registrationDate: '',
    ogrn: '',
  });

  const handleBlur = useCallback(() => {
    getInfoByInn(
      data?.inn, 
      (autofilledData) => setData({ ...data, ...autofilledData })
    );
  }, [data?.inn]);

  return (
    <div className={PREFIX + 'limited-liability-company'}>
      <div className="universal-row-container">
        <Input 
          className="full-name"
          label="Наименование полное" 
          placeholder="ООО «Московская промышленная компания»" 
          value={data?.fullName || ''}
          onChange={(event) => setData({ ...data, fullName: event?.target?.value || '' })}
        />
        <Input 
          className="mini-field"
          label="Сокращение" 
          placeholder="ООО «МПК»" 
          value={data?.shortName || ''}
          onChange={(event) => setData({ ...data, shortName: event?.target?.value || '' })}
        />
      </div>
      <div className="universal-row-container">
        <Input
          className="mini-field"
          type="date"
          label="Дата регистрации" 
          value={data?.registrationDate || ''}
          onChange={(event) => setData({ ...data, registrationDate: event?.target?.value || '' })}
        />
        <Input 
          className="mini-field" 
          label="ИНН" 
          placeholder="хххххххххх" 
          value={data?.inn || ''}
          onChange={(event) => setData({ ...data, inn: event?.target?.value || '' })}
          onBlur={handleBlur}
        />
        <File label="Скан ИНН" />
      </div>
      <div className="universal-row-container">
        <Input 
          className="mini-field" 
          label="ОГРН" 
          placeholder="ххххххххххххх" 
          value={data?.ogrn || ''}
          onChange={(event) => setData({ ...data, ogrn: event?.target?.value || '' })}
        />
        <File className="ogrn" label="Скан ОГРН" />
      </div>
    </div>
  );
};