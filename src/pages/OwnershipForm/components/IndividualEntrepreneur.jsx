import { PREFIX } from "../../../constants/servicePrefix";
import { File, Input } from "../../../components";

export const IndividualEntrepreneur = () => {
  return (
    <div className={PREFIX + 'individual-entrepreneur'}>
      <Input className="mini-field" label="ИНН" placeholder="хххххххххх" />
      <File />
      {/* TODO: добавить здесь Скан ИНН */}
      <Input
        className="mini-field"
        type="date"
        label="Дата регистрации"
      />
      <Input className="ogrnip" label="ОГРНИП" placeholder="ххххххххххххххх" />
      {/* TODO: добавить здесь Скан ОГРНИП */}
      {/* TODO: добавить здесь Скан договора аренды помещения (офиса) */}
      {/* TODO: добавить здесь Скан выписки из ЕГРИП (не старше 3 месяцев) */}
      {/* TODO: добавить здесь чек-бокс Нет договора */}
    </div>
  );
};