
export const languages = {
  en: 'EN',
  de: 'DE',
  no: 'NO'
};

export const defaultLang = 'de';

export const ui = {
  de: {
    'nav.pageName':'Julians Stories',
    'nav.traditionalStories':'Traditional Fairytails',
  },
  en: {
    'nav.pageName':'Julians Geschichten',
    'nav.traditionalStories':'Traditionelle Märchen ',

  },
  no:{
    'nav.pageName':'Julians Historier',
    'nav.traditionalStories':'Tradisjonelle eventyr',
    'nav.whoIsJulian':'Hvem er Julian?',

  }
} as const;
