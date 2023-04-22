import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { SocialNetworksIcon } from "../../assets";
import { PREFIX } from "../../constants/servicePrefix";
import { Select, Button } from "../../components";
import { navigation } from '../../data';
import { RESIDENCE_ADDRESS } from '../../constants/pages';
import './SocialNetworks.scss';

export const SocialNetworks = () => {
  const navigate = useNavigate();

  const openPreviousPage = useCallback(() => {
    const previousPage = navigation.find(({ id }) => id === RESIDENCE_ADDRESS).path;

    navigate(previousPage);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={PREFIX + 'social-networks'}>
      <img alt="Иконка дома" src={SocialNetworksIcon} />
      <h1>Социальные сети</h1>
      <p className="description">
        Введите свои действуйющие ссылки на социальные сети 
        и количество подписчиков.
      </p>
      <Select 
        className="site-or-app"
        label="Сайт / Приложение"
        data={[
          { value: 'select', label: 'Выбрать' },
          { value: 'vk', label: 'ВКонтакте' },
          { value: 'insta', label: 'Instagram' },
          { value: 'wa', label: 'WhatsApp' },
          { value: 'yt', label: 'YouTube' },
          { value: 'ok', label: 'Одноклассники' },
          { value: 'fb', label: 'Facebook' },
          { value: 'vb', label: 'Viber' },
          { value: 'vim', label: 'Vimeo' },
          { value: 'sk', label: 'Skype' },
        ]}
      />
      {/* TODO: Добавить социальную сеть */}
      <div className="buttons-container">
        <Button secondary onClick={openPreviousPage}>
          Назад
        </Button>
        <Button>
          Сохранить
        </Button>
      </div>
    </div>
  );
};