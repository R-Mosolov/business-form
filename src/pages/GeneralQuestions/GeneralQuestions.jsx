import { Button, Input, Select } from "../../components";

export const GeneralQuestions = () => {
  return (
    <>
      <img alt="Иконка профиля"></img>
      <h1>Общие</h1>
      <p>Введите свои персональные данные.</p>
      <Input label="Фамилия" placeholder="Васильев" />
      <Input label="Имя" placeholder="Иван" />
      <Input label="Отчество" placeholder="Сергеевич" />
      <Select 
        label="Основной город"
        data={[
          { value: 'msc', label: 'Москва' },
          { value: 'spb', label: 'Санкт-Петербург', selected: true },
        ]}
        required
      />
      <Select 
        label="Гражданство"
        data={[
          { value: 'ru', label: 'Россия', selected: true },
          { value: 'fr', label: 'Франция' },
        ]}
        required
      />
      <Input
        type="date"
        label="Дата рождения"
      />
      <Input
        label="Место рождения (как указано в паспорте)" 
        placeholder="Введите наименование региона и населенного пункта" 
      />
      <Button>
        Отмена
      </Button>
      <Button>
        Далее
      </Button>
    </>
  );
};