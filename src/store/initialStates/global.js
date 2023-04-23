const globalAddressItems = {
  country: '',
  region: '',
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
    city: 'spb',
    nationality: 'russian',
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
      hasContract: true
    },
    llc: {
      fullName: '',
      shortName: '',
      ogrn: ''
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
