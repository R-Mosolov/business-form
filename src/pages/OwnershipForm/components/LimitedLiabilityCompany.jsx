import { PREFIX } from "../../../constants/servicePrefix";
import { Input, File } from "../../../components";

export const LimitedLiabilityCompany = () => {
  return (
    <div className={PREFIX + 'limited-liability-company'}>
      <div className="universal-row-container">
        <Input 
          className="full-name"
          label="Наименование полное" 
          placeholder="ООО «Московская промышленная компания»" 
        />
        <Input 
          className="mini-field"
          label="Сокращение" 
          placeholder="ООО «МПК»" 
        />
      </div>
      <div className="universal-row-container">
        <Input
          className="mini-field"
          type="date"
          label="Дата регистрации"
        />
        <Input className="mini-field" label="ИНН" placeholder="хххххххххх" />
        <File label="Скан ИНН" />
      </div>
      <div className="universal-row-container">
        <Input className="mini-field" label="ОГРН" placeholder="ххххххххххххх" />
        <File className="ogrn" label="Скан ОГРН" />
      </div>
    </div>
  );
};