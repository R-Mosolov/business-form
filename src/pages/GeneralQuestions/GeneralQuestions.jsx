import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "../../components";
import { PREFIX } from "../../constants/servicePrefix";
import { GeneralQuestionsIcon } from "../../assets";
import { navigation } from '../../data';
import { OWNERSHIP_FORM } from '../../constants/pages';

export const GeneralQuestions = () => {
  const navigate = useNavigate();

  const openNextPage = useCallback(() => {
    const nextPage = navigation.find(({ id }) => id === OWNERSHIP_FORM).path;

    navigate(nextPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PREFIX + 'general-questions'}>
      <img alt="Иконка профиля" src={GeneralQuestionsIcon} />
      <h1>Общие</h1>
      <p className="description">
        Введите свои персональные данные.
      </p>
      <Input label="Фамилия" placeholder="Васильев" />
      <Input label="Имя" placeholder="Иван" />
      <Input label="Отчество" placeholder="Сергеевич" />
      <Select 
        label="Основной город"
        data={[
          { value: 'spb', label: 'Санкт-Петербург' },
          { value: 'msc', label: 'Москва' },
        ]}
      />
      <Select 
        label="Гражданство"
        data={[
          { value: 'ru', label: 'Россия' },
          { value: 'fr', label: 'Франция' },
        ]}
      />
      <Input
        type="date"
        label="Дата рождения"
      />
      <Input
        label="Место рождения (как указано в паспорте)" 
        placeholder="Введите наименование региона и населенного пункта" 
      />
      <div className="buttons-container">
        <Button secondary>
          Отмена
        </Button>
        <Button onClick={openNextPage}>
          Далее
        </Button>
      </div>
    </div>
  );
};