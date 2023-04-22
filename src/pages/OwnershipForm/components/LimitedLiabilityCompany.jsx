import { PREFIX } from "../../../constants/servicePrefix";
import { Input, Button, File } from "../../../components";

export const LimitedLiabilityCompany = () => {
  return (
    <div className={PREFIX + 'limited-liability-company'}>
      <Input 
        label="Наименование полное" 
        placeholder="ООО «Московская промышленная компания»" 
      />
      <Input 
        label="Сокращение" 
        placeholder="ООО «МПК»" 
      />
      <Input
        type="date"
        label="Дата регистрации"
      />
      <Input label="ИНН" placeholder="хххххххххх" />
      <File label="Скан ИНН" />
      <Input label="ОГРН" placeholder="ххххххххххххх" />
      <File label="Скан ОГРН" />
      <Button>
        Отмена
      </Button>
      <Button>
        Далее
      </Button>
    </div>
  );
};