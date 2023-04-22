import { PREFIX } from "../../constants/servicePrefix";
import { Button } from "../../components";
import AddressForm from "./components";
import { AddressIcon } from "../../assets";

export const RegistrationAddress = () => {
  return (
    <div className={PREFIX + 'registration-address'}>
      <img alt="Иконка дома" src={AddressIcon} />
      <h1>Адрес регистрации</h1>
      <p className="description">
        Введите свой действующий адрес прописки.
      </p>
      <AddressForm />
      <div className="buttons-container">
        <Button secondary>
          Назад
        </Button>
        <Button>
          Далее
        </Button>
      </div>
    </div>
  );
};