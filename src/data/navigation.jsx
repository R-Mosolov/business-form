import { Page } from '../components';
import { 
  GENERAL_QUESTIONS,
  OWNERSHIP_FORM,
  REGISTRATION_ADDRESS,
  RESIDENCE_ADDRESS,
  SOCIAL_NETWORKS
} from '../constants/pages';
import {
  GeneralQuestions,
  OwnershipForm,
  RegistrationAddress,
  ResidenceAddress,
  SocialNetworks,
} from '../pages';

export const navigation = [
  {
    id: GENERAL_QUESTIONS,
    title: "Общие",
    order: 1,
    path: "/",
    element: (
      <Page>
        <GeneralQuestions />
      </Page>
    )
  },
  {
    id: OWNERSHIP_FORM,
    title: "Форма собственности",
    order: 2,
    path: "/" + OWNERSHIP_FORM,
    element: (
      <Page>
        <OwnershipForm />
      </Page>
    )
  },
  {
    id: REGISTRATION_ADDRESS,
    title: "Адрес регистрации",
    order: 3,
    path: "/" + REGISTRATION_ADDRESS,
    element: (
      <Page>
        <RegistrationAddress />
      </Page>
    )
  },
  {
    id: RESIDENCE_ADDRESS,
    title: "Адрес проживания",
    order: 4,
    path: "/" + RESIDENCE_ADDRESS,
    element: (
      <Page>
        <ResidenceAddress />
      </Page>
    )
  },
  {
    id: SOCIAL_NETWORKS,
    title: "Социальные сети",
    order: 5,
    path: "/" + SOCIAL_NETWORKS,
    element: (
      <Page>
        <SocialNetworks />
      </Page>
    )
  }
];