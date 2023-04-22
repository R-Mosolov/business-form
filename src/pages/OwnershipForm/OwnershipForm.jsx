import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { PREFIX } from "../../constants/servicePrefix";
import { Select, Button } from "../../components";
import { OwnershipFormIcon } from "../../assets";
import { navigation } from '../../data';
import { GENERAL_QUESTIONS, REGISTRATION_ADDRESS } from '../../constants/pages';

export const OwnershipForm = () => {
  const navigate = useNavigate();

  const openNextPage = useCallback(() => {
    const nextPage = navigation.find(({ id }) => id === REGISTRATION_ADDRESS).path;

    navigate(nextPage);
    window.scrollTo(0, 0);
  }, []);

  const openPreviousPage = useCallback(() => {
    const previousPage = navigation.find(({ id }) => id === GENERAL_QUESTIONS).path;

    navigate(previousPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PREFIX + 'ownership-form'}>
      <img alt="Иконка телефона" src={OwnershipFormIcon} />
      <h1>Форма собственности</h1>
      <p className="description">
        Выберите форму собственности и заполните данные
      </p>
      <Select 
        label="Вид деятельности"
        data={[
          { value: 'select', label: 'Выбрать' },
          { value: 'ie', label: 'Индивидуальный предприниматель (ИП)' },
          { value: 'llc', label: 'Общество с ограниченной ответственностью (ООО)' },
        ]}
      />
      <div className="buttons-container">
        <Button secondary onClick={openPreviousPage}>
          Назад
        </Button>
        <Button onClick={openNextPage}>
          Далее
        </Button>
      </div>
    </div>
  );
};