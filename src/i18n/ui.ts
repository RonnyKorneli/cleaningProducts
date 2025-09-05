
export const languages = {
  en: 'EN',
  de: 'DE',
  no: 'NO'
};

export const defaultLang = 'de';

export const ui = {
  de: {
    'home.headline':'Reinigungsprodukte',
    'home.chooseKita':'Wähle eine Kita',
    'productList.whatWeHaveStorage':'Was haben wir im Lager?',

  },
  en: {
    'home.headline':'Cleaning Products',
    'home.chooseKita':'Choose a Kita',
    'productList.whatWeHaveStorage':'What do we have in Storage?',


  },
  no:{
    'home.headline':'Rengjøringsprodukter',
    'home.chooseKita':'Velg en barnehage',
    'productList.whatWeHaveStorage':'Hva har vi på lager?',


  }
} as const;
