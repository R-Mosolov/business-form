import { PREFIX } from "../../constants/servicePrefix";
import { Button } from "../../components";
import AddressForm from "./components";
import { AddressIcon } from "../../assets";

export const RegistrationAddress = () => {
  return (
    <div className={PREFIX + 'registration-address'}>
      <img alt="Иконка дома" src={AddressIcon} />
      <h1>Адрес регистрации</h1>
      <p>Введите свой действуйющий адрес прописки.</p>
      <AddressForm />
      <Button>
        Назад
      </Button>
      <Button>
        Далее
      </Button>
    </div>
  );
};