/*
export const products = [
  {
    id: "vacuumCleanerBags",
    name: "Vacuum cleaner bags",
    label: "Vacuum cleaner bags (Number of Bags still there)",
    forOnLabel: "",
    placeholderName: "Menge eintragen"
  },
  {
    id: "laundryDetergentSheets",
    name: "Laundry Detergent Sheets",
    label: "Laundry detergent (Number of packages still there)",
    forOnLabel: "",
    placeholderName: "Menge eintragen"
  },
  {
    id: "handSoapRefillable",
    name: "Hand Soap Refillable",
    label: "Hand soap refillable (Number of bottles still there)",
    forOnLabel: "hand-soap-refillable",
    placeholderName: "Menge eintragen"
  },
  {
    id: "scouringMilk",
    name: "Milk / Cream Cleanser",
    label: "Scouring milk/cream cleanser (Number of bottles)",
    forOnLabel: "scouring-milk",
    placeholderName: "Menge eintragen"
  },
  {
    id: "foldedPaperTowels",
    name: "Folded Paper Towels",
    label: "Folded paper towels (Number of full boxes)",
    forOnLabel: "folded-paper-towels",
    placeholderName: "Menge eintragen"
  },
  {
    id: "toiletPaper",
    name: "Toilet Paper",
    label: "Toilet Paper (Number of Packs still there)",
    forOnLabel: "toilet-paper",
    placeholderName: "Menge eintragen"
  },
  {
    id: "disinfectantHands",
    name: "Disinfectant Hands",
    label: "Disinfectant for hands (Number of full bottles)",
    forOnLabel: "disinfectant-hands",
    placeholderName: "Menge eintragen"
  },
  {
    id: "redCleaningAgent",
    name: "Red Cleaning Agent",
    label: "Red cleaning agent (Number of full bottles)",
    forOnLabel: "red-cleaning-agent",
    placeholderName: "Menge eintragen"
  },
  {
    id: "blueCleaningAgent",
    name: "Blue Cleaning Agent",
    label: "Blue cleaning agent (Number of full bottles)",
    forOnLabel: "blue-cleaning-agent",
    placeholderName: "Menge eintragen"
  },
  {
    id: "disinfectantWipes",
    name: "Disinfectant Wipes (Number of full packages)",
    label: "Disinfectant wipes",
    forOnLabel: "disinfectant-wipes",
    placeholderName: "Menge eintragen"
  }
];


 */


// src/data/products.ts
// src/data/products.ts
export const products = [
  {
    id: "vacuumCleanerBags",
    name: {
      de: "Staubsaugerbeutel",
      en: "Vacuum cleaner bags",
      no: "Støvsugerposer"
    },
    label: {
      de: "Staubsaugerbeutel (Anzahl noch vorhanden)",
      en: "Vacuum cleaner bags (Number still there)",
      no: "Støvsugerposer (antall igjen)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: ""
  },
  {
    id: "laundryDetergentSheets",
    name: {
      de: "Waschmittelblätter",
      en: "Laundry Detergent Sheets",
      no: "Vaskemiddelark"
    },
    label: {
      de: "Waschmittelblätter (Anzahl Pakete noch vorhanden)",
      en: "Laundry detergent sheets (Number of packages still there)",
      no: "Vaskemiddelark (antall pakker igjen)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: ""
  },
  {
    id: "handSoapRefillable",
    name: {
      de: "Nachfüllbare Handseife",
      en: "Hand Soap Refillable",
      no: "Påfyllbar håndsåpe"
    },
    label: {
      de: "Nachfüllbare Handseife (Anzahl Flaschen noch vorhanden)",
      en: "Hand soap refillable (Number of bottles still there)",
      no: "Påfyllbar håndsåpe (antall flasker igjen)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "hand-soap-refillable"
  },
  {
    id: "scouringMilk",
    name: {
      de: "Scheuermilch / Cremereiniger",
      en: "Milk / Cream Cleanser",
      no: "Skuremelk / kremrengjøring"
    },
    label: {
      de: "Scheuermilch / Cremereiniger (Anzahl Flaschen)",
      en: "Scouring milk/cream cleanser (Number of bottles)",
      no: "Skuremelk / kremrengjøring (antall flasker)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "scouring-milk"
  },
  {
    id: "foldedPaperTowels",
    name: {
      de: "Gefaltete Papiertücher",
      en: "Folded Paper Towels",
      no: "Brettede papirhåndklær"
    },
    label: {
      de: "Gefaltete Papiertücher (Anzahl volle Boxen)",
      en: "Folded paper towels (Number of full boxes)",
      no: "Brettede papirhåndklær (antall fulle bokser)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "folded-paper-towels"
  },
  {
    id: "toiletPaper",
    name: {
      de: "Toilettenpapier",
      en: "Toilet Paper",
      no: "Toalettpapir"
    },
    label: {
      de: "Toilettenpapier (Anzahl Packs noch vorhanden)",
      en: "Toilet Paper (Number of packs still there)",
      no: "Toalettpapir (antall pakker igjen)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "toilet-paper"
  },
  {
    id: "disinfectantHands",
    name: {
      de: "Händedesinfektionsmittel",
      en: "Disinfectant Hands",
      no: "Hånddesinfeksjon"
    },
    label: {
      de: "Desinfektionsmittel für Hände (Anzahl volle Flaschen)",
      en: "Disinfectant for hands (Number of full bottles)",
      no: "Hånddesinfeksjon (antall fulle flasker)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "disinfectant-hands"
  },
  {
    id: "redCleaningAgent",
    name: {
      de: "Rotes Reinigungsmittel",
      en: "Red Cleaning Agent",
      no: "Rødt rengjøringsmiddel"
    },
    label: {
      de: "Rotes Reinigungsmittel (Anzahl volle Flaschen)",
      en: "Red cleaning agent (Number of full bottles)",
      no: "Rødt rengjøringsmiddel (antall fulle flasker)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "red-cleaning-agent"
  },
  {
    id: "blueCleaningAgent",
    name: {
      de: "Blaues Reinigungsmittel",
      en: "Blue Cleaning Agent",
      no: "Blått rengjøringsmiddel"
    },
    label: {
      de: "Blaues Reinigungsmittel (Anzahl volle Flaschen)",
      en: "Blue cleaning agent (Number of full bottles)",
      no: "Blått rengjøringsmiddel (antall fulle flasker)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "blue-cleaning-agent"
  },
  {
    id: "disinfectantWipes",
    name: {
      de: "Desinfektionstücher",
      en: "Disinfectant Wipes",
      no: "Desinfeksjonsservietter"
    },
    label: {
      de: "Desinfektionstücher (Anzahl volle Packungen)",
      en: "Disinfectant wipes (Number of full packages)",
      no: "Desinfeksjonsservietter (antall fulle pakker)"
    },
    placeholderName: {
      de: "Menge eintragen",
      en: "Enter quantity",
      no: "Skriv inn antall"
    },
    forOnLabel: "disinfectant-wipes"
  }
];
