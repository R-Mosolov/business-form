import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Select } from "../../components";
import { PREFIX } from "../../constants/servicePrefix";
import { GeneralQuestionsIcon } from "../../assets";
import { navigation } from '../../data';
import { OWNERSHIP_FORM } from '../../constants/pages';
import { setData } from '../../store/reducers/global';

export const GeneralQuestions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { generalQuestions } = useSelector(({ global }) => global);
  const {
    lastName,
    firstName,
    middleName,
    birthPlace,
  } = generalQuestions;

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
      <div className='big-columns-container'>
        <Input 
          label="Фамилия" 
          placeholder="Васильев"
          value={lastName || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'generalQuestions', data: { lastName: target.value } })
          )} 
        />
        <Input 
          label="Имя" 
          placeholder="Иван" 
          value={firstName || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'generalQuestions', data: { firstName: target.value } })
          )} 
        />
      </div>
      <div className='big-columns-container'>
        <Input 
          label="Отчество" 
          placeholder="Сергеевич" 
          value={middleName || ''}
          onChange={({ target }) => dispatch(
            setData({ page: 'generalQuestions', data: { middleName: target.value } })
          )} 
        />
        <Select 
          label="Основной город"
          data={[
            { value: 'spb', label: 'Санкт-Петербург' },
            { value: 'msc', label: 'Москва' },
          ]}
        />
      </div>
      <div className='big-columns-container'>
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
      </div>
      <Input
        label="Место рождения (как указано в паспорте)" 
        placeholder="Введите наименование региона и населенного пункта" 
        value={birthPlace || ''}
        onChange={({ target }) => dispatch(
          setData({ page: 'generalQuestions', data: { birthPlace: target.value } })
        )} 
      />
      <div className="universal-row-container">
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