import { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SocialNetworksIcon } from "../../assets";
import { PREFIX } from "../../constants/servicePrefix";
import { Button, SocialLink } from "../../components";
import { navigation, socialLinks } from '../../data';
import { RESIDENCE_ADDRESS } from '../../constants/pages';
import './SocialNetworks.scss';
import { sendDataToDb } from '../../services/sendDataToDb';
import { useSelector } from 'react-redux';

export const SocialNetworks = () => {
  const navigate = useNavigate();
  const data = useSelector(store => store.global);
  const [linksCounter, setLinksCounter] = useState(1);

  const openPreviousPage = useCallback(() => {
    const previousPage = navigation.find(({ id }) => id === RESIDENCE_ADDRESS).path;

    navigate(previousPage);
    window.scrollTo(0, 0);
  }, []);

  const handleSendingDataToDb = useCallback(() => {
    sendDataToDb(data);
  }, [data]);

  const addNewField = () => {
    setLinksCounter(linksCounter => linksCounter + 1);
  };

  return (
    <div className={PREFIX + 'social-networks'}>
      <img alt="Иконка дома" src={SocialNetworksIcon} />
      <h1>Социальные сети</h1>
      <p className="description">
        Введите свои действуйющие ссылки на социальные сети 
        и количество подписчиков.
      </p>
      {[...new Array(linksCounter)].map(() => <SocialLink 
        className="site-or-app" 
        types={socialLinks} 
      />)}
      <Button className="add-social-link" isSocialLinksButton onClick={addNewField}>
        Добавить социальную сеть
      </Button>
      <div className="universal-row-container">
        <Button secondary onClick={openPreviousPage}>
          Назад
        </Button>
        <Button onClick={handleSendingDataToDb}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};