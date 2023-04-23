import { useDispatch, useSelector } from 'react-redux';
import { PREFIX } from '../../constants/servicePrefix';
import { Input, Select } from '../../components';
import { useCallback, useState } from 'react';
import './SocialLink.scss';
import { setData } from '../../store/reducers/global';
import { getSelectLabel } from '../../utils';

export const SocialLink = ({
  types
}) => {
  const dispatch = useDispatch();
  const { socialNetworks } = useSelector(store => store.global);
  const [type, setType] = useState('');
  const [link, setLink] = useState('');

  const handleChange = useCallback(({ target }) => {
    if (type && link) {
      setLink(target.value);

      dispatch(
        setData({
          isArray: true,
          page: 'socialNetworks',
          data: { 
            type: getSelectLabel(types, type), 
            link: link 
          }
        })
      );
    }
  }, [type, link, socialNetworks, dispatch]);

  return (
    <div className={PREFIX + 'social-link'}>
      <Select 
        className="select" 
        label="Сайт / Приложение"
        data={types} 
        onChange={({ target }) => setType(target.value)} 
      />
      {type && <Input 
        className="input" 
        value={link}
        onChange={({ target }) => setLink(target.value)}
        onBlur={handleChange} 
      />}
    </div>
  );
};