import './Sidebar.styles.scss';
import { PREFIX } from "../../constants/servicePrefix";
import { Steps } from '../Steps/Steps';

export const Sidebar = () => {
  return (
    <section className={PREFIX + 'sidebar'}>
      <h2>Создание аккаунта</h2>
      <p className='description description-sidebar'>
        Заполните все пункты данной формы и нажмите кнопку «Сохранить».
      </p>
      <Steps />
    </section>
  );
};