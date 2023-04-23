import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { PREFIX } from "../../constants/servicePrefix";
import { Button } from "../../components";
import AddressForm from "../RegistrationAddress/components";
import { AddressIcon } from "../../assets";
import { navigation } from '../../data';
import { REGISTRATION_ADDRESS, SOCIAL_NETWORKS } from '../../constants/pages';

export const ResidenceAddress = () => {
  const navigate = useNavigate();

  const openNextPage = useCallback(() => {
    const nextPage = navigation.find(({ id }) => id === SOCIAL_NETWORKS).path;

    navigate(nextPage);
    window.scrollTo(0, 0);
  }, []);

  const openPreviousPage = useCallback(() => {
    const previousPage = navigation.find(({ id }) => id === REGISTRATION_ADDRESS).path;

    navigate(previousPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PREFIX + 'residence-address'}>
      <img alt="Иконка дома" src={AddressIcon} />
      <h1>Адрес проживания</h1>
      <p className="description">
        Введите свой действуйющий адрес проживания.
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