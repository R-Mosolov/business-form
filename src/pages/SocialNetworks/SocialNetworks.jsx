import { SocialNetworksIcon } from "../../assets";
import { PREFIX } from "../../constants/servicePrefix";
import { Select } from "../../components";

export const SocialNetworks = () => {
  return (
    <div className={PREFIX + 'social-networks'}>
    <img alt="Иконка дома" src={SocialNetworksIcon} />
    <h1>Социальные сети</h1>
    <p>
      Введите свои действуйющие ссылки на социальные сети 
      и количество подписчиков.
    </p>
    <Select 
      label="Сайт / Приложение"
      data={[
        { value: 'select', label: 'Выбрать', selected: true },
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
    </div>
  );
};