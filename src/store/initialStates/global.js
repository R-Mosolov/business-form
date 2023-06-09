const globalAddressItems = {
  country: 'Россия',
  region: 'Ленинградская область',
  cityOrProvince: '',
  streetName: '',
  streetNumber: '',
  registrationDate: '',
  flatNumber: '',
  hasFlat: true
};

const globalState = {
  generalQuestions: {
    lastName: '',
    firstName: '',
    middleName: '',
    city: 'Санкт-Петербург',
    nationality: 'Россия',
    gender: 'male',
    birthDate: '',
    birthPlace: ''
  },
  ownershipForm: {
    activityType: '',
    inn: '',
    registrationDate: '',
    ie: {
      ogrnip: '',
      hasContract: true,
      files: {
        inn: '',
        ogrnip: '',
        leaseContract: '',
        egrip: ''
      }
    },
    llc: {
      fullName: '',
      shortName: '',
      ogrn: '',
      files: {
        inn: '',
        ogrn: ''
      }
    }
  },
  registrationAddress: globalAddressItems,
  residenceAddress: {
    ...globalAddressItems,
    areAddressesEquivalent: false
  },
  socialNetworks: []
};

export default globalState;
