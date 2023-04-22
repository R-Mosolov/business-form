import { useState, useEffect, useMemo } from 'react';
import './Steps.styles.scss';
import { PREFIX } from '../../constants/servicePrefix';
import { navigation } from '../../data';
import cn from 'classnames';
import { CheckboxIcon } from '../../assets';

export const Steps = () => {
  const [currentPath, setCurrentPath] = useState(null);
  const [currentPathOrder, setCurrentPathOrder] = useState(null);

  useEffect(() => {
    const _currentPath = String(window.location.pathname);
    const _currentPathOrder = navigation
      .find(({ path }) => path === _currentPath).order;

    setCurrentPath(_currentPath);
    setCurrentPathOrder(_currentPathOrder);
  }, [window.location.pathname]);

  const memoizedSteps = useMemo(() => {
    return navigation.map(({ order, title, path }, index) => {
      const isPassedPage = (path !== currentPath) && (order < currentPathOrder);
      const isFeaturePage = (path !== currentPath) && (order > currentPathOrder);

      return (
        <li key={index}>
          <span className={cn(
            'number-container',
            { 'passed-page': isPassedPage },
            { 'feature-page': isFeaturePage }
          )}>
            <span className='number-item'>{++index}</span>
          </span>
          <span className='title'>{title}</span>
          {isPassedPage && <img alt="Иконка заполнения" src={CheckboxIcon} />}
        </li>
      );
    });
  }, [currentPath, currentPathOrder]);

  return (
    <nav className={PREFIX + 'steps'}>
      <ol>
        {memoizedSteps}
      </ol>
    </nav>
  );
};