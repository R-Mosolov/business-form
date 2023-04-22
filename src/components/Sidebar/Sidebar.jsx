import './Sidebar.styles.scss';
import { PREFIX } from "../../constants/servicePrefix";

export const Sidebar = () => {
  return (
    <section className={PREFIX + 'sidebar'}>
      <h2>Создание аккаунта</h2>
      <p className='description description-sidebar'>
        Заполните все пункты данной формы и нажмите кнопку «Сохранить».
      </p>
      <nav>
        <ol>
          <li>Общие</li>
          <li>Форма собственности</li>
          <li>Адрес регистрации</li>
          <li>Адрес проживания</li>
          <li>Социальные сети</li>
        </ol>
      </nav>
    </section>
  );
};