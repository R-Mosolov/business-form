import './Steps.styles.scss';
import { PREFIX } from '../../constants/servicePrefix';
import { navigation } from '../../data';

export const Steps = () => {
  return (
    <nav className={PREFIX + 'steps'}>
      <ol>
        {navigation.map(({ title }, index) => (
          <li key={index}>
            <span className='number-container'>
              <span className='number-item'>{++index}</span>
            </span>
            <span>{title}</span>
            {/* TODO: passed */}
          </li>
        ))}
      </ol>
    </nav>
  );
};