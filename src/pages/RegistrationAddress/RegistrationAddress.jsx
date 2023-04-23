import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { PREFIX } from "../../constants/servicePrefix";
import { Button } from "../../components";
import AddressForm from "./components";
import { AddressIcon } from "../../assets";
import { navigation } from '../../data';
import { OWNERSHIP_FORM, RESIDENCE_ADDRESS } from '../../constants/pages';

export const RegistrationAddress = () => {
  const navigate = useNavigate();

  const openNextPage = useCallback(() => {
    const nextPage = navigation.find(({ id }) => id === RESIDENCE_ADDRESS).path;

    navigate(nextPage);
    window.scrollTo(0, 0);
  }, []);

  const openPreviousPage = useCallback(() => {
    const previousPage = navigation.find(({ id }) => id === OWNERSHIP_FORM).path;

    navigate(previousPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PREFIX + 'registration-address'}>
      <img alt="Иконка дома" src={AddressIcon} />
      <h1>Адрес регистрации</h1>
      <p className="description">
        Введите свой действующий адрес прописки.
      </p>
      <AddressForm />
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