import { PREFIX } from "../../../constants/servicePrefix";
import { Input } from "../../../components";

export const IndividualEntrepreneur = () => {
  return (
    <div className={PREFIX + 'individual-entrepreneur'}>
      <Input label="ИНН" placeholder="хххххххххх" />
      {/* TODO: добавить здесь Скан ИНН */}
      <Input
        type="date"
        label="Дата регистрации"
      />
      <Input label="ОГРНИП" placeholder="ххххххххххххххх" />
      {/* TODO: добавить здесь Скан ОГРНИП */}
      {/* TODO: добавить здесь Скан договора аренды помещения (офиса) */}
      {/* TODO: добавить здесь Скан выписки из ЕГРИП (не старше 3 месяцев) */}
      {/* TODO: добавить здесь чек-бокс Нет договора */}
    </div>
  );
};