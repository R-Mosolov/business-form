import { PREFIX } from "../../../constants/servicePrefix";
import { Input, Button } from "../../../components";

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
      {/* TODO: добавить здесь Скан ИНН */}
      <Input label="ОГРН" placeholder="ххххххххххххх" />
      {/* TODO: добавить здесь Скан ОГРН */}
      <Button>
        Отмена
      </Button>
      <Button>
        Далее
      </Button>
    </div>
  );
};