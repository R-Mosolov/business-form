import { Input } from "../../components";

export const GeneralQuestions = () => {
  return (
    <>
      <h1>Общие</h1>
      <p>Введите свои персональные данные.</p>
      <Input title="Фамилия" placeholder="Васильев" />
      <Input title="Имя" placeholder="Иван" />
      <Input title="Отчество" placeholder="Сергеевич" />
      <Input
        title="Место рождения (как указано в паспорте)" 
        placeholder="Введите наименование региона и населенного пункта" 
      />
    </>
  );
};