import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PREFIX } from "../../constants/servicePrefix";
import { Select, Button } from "../../components";
import { OwnershipFormIcon } from "../../assets";
import { navigation } from '../../data';
import { GENERAL_QUESTIONS, REGISTRATION_ADDRESS } from '../../constants/pages';
import { IndividualEntrepreneur, LimitedLiabilityCompany } from '.';
import './OwnershipForm.scss';

export const OwnershipForm = () => {
  const navigate = useNavigate();
  const [ownershipForm, setOwnershipForm] = useState();

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

  const memoizedForm = useMemo(() => {
    switch(ownershipForm) {
      case 'ie':
        return <IndividualEntrepreneur />;
      case 'llc':
        return <LimitedLiabilityCompany />;
      case null:
      default:
        return <></>;
    }
  }, [ownershipForm]);

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    let result = null;

    if ((value === 'ie') || (value === 'llc')) {
      setOwnershipForm(value);
    }

    return result;
  }, [ownershipForm]);

  return (
    <div className={PREFIX + 'ownership-form'}>
      <img alt="Иконка телефона" src={OwnershipFormIcon} />
      <h1>Форма собственности</h1>
      <p className="description">
        Выберите форму собственности и заполните данные
      </p>
      <Select 
        className="activity-type"
        label="Вид деятельности"
        data={[
          { value: 'select', label: 'Выбрать' },
          { value: 'ie', label: 'Индивидуальный предприниматель (ИП)' },
          { value: 'llc', label: 'Общество с ограниченной ответственностью (ООО)' },
        ]}
        onChange={handleChange}
      />
      {memoizedForm}
      <div className="universal-row-container">
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