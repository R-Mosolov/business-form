import { PREFIX } from "../../constants/servicePrefix";
import { Button } from "../../components";
import AddressForm from "../RegistrationAddress/components";
import { AddressIcon } from "../../assets";

export const ResidenceAddress = () => {
  return (
    <div className={PREFIX + 'residence-address'}>
      <img alt="Иконка дома" src={AddressIcon} />
      <h1>Адрес проживания</h1>
      <p>Введите свой действуйющий адрес проживания.</p>
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