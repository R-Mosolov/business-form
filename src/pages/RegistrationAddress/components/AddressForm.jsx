import { Select, Input } from "../../../components";

export const AddressForm = () => {
  return (
    <>
      <Select 
        label="Страна"
        data={[
          { value: 'ru', label: 'Россия', selected: true },
          { value: 'fr', label: 'Франция' },
        ]}
      />
      <Select 
        label="Регион"
        data={[
          { value: 'select', label: 'Выберите регион', selected: true },
        ]}
      />
      <Input
        label="Город / Населенный пункт" 
        placeholder="Введите населенный пункт" 
      />
      <Input
        label="Улица" 
        placeholder="Введите улицу" 
      />
      <Input
        type="number"
        label="Дом" 
        placeholder="0" 
      />
      <Input
        type="number"
        label="Квартира" 
        placeholder="0" 
      />
      {/* TODO: добавить здесь чек-бокс Нет квартиры */}
      <Input
        type="date"
        label="Дата прописки"
      />
    </>
  );
};