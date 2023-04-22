import { PREFIX } from "../../constants/servicePrefix";
import { Select, Button } from "../../components";
import { OwnershipFormIcon } from "../../assets";

export const OwnershipForm = () => {
  return (
    <div className={PREFIX + 'ownership-form'}>
      <img alt="Иконка телефона" src={OwnershipFormIcon} />
      <h1>Форма собственности</h1>
      <p>Выберите форму собственности и заполните данные</p>
      <Select 
        label="Вид деятельности"
        data={[
          { value: 'select', label: 'Выбрать', selected: true },
        ]}
      />
      <Button>
        Назад
      </Button>
      <Button>
        Далее
      </Button>
    </div>
  );
};