import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { PREFIX } from "../../constants/servicePrefix";
import { Select, Button } from "../../components";
import { OwnershipFormIcon } from "../../assets";
import { activities, navigation } from '../../data';
import { GENERAL_QUESTIONS, REGISTRATION_ADDRESS } from '../../constants/pages';
import { IndividualEntrepreneur, LimitedLiabilityCompany } from '.';
import './OwnershipForm.scss';
import { setData } from '../../store/reducers/global';
import { getSelectLabel } from '../../utils';

export const OwnershipForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      dispatch(
        setData({ 
          page: 'ownershipForm', 
          data: { activityType: getSelectLabel(activities, value) } 
        })
      );
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
        data={activities}
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