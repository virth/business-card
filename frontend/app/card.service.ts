import { Injectable } from '@angular/core';
import { BusinessCard } from './business-card';
import { CardTextRow } from './card-text-row';

@Injectable()
export class CardService {
    getCards() {
        return MOCKEDCARDS;
    }
    getCardDetail(id:number) {
        return MOCKEDDETAILS;
    }
}

var MOCKEDDETAILS:CardTextRow[] = [
   {
       displayName: "Name",
       type: "Text",
       validationRegex: "abcd"
   },
   {
       displayName: "Strasse",
       type: "Text",
       validationRegex: "abcd"
   },
   {
       displayName: "Postleitzahl",
       type: "Number",
       validationRegex: "abcd"
   },
   {
       displayName: "Wohnort",
       type: "Text",
       validationRegex: "abcd"
   },  
];

var MOCKEDCARDS :BusinessCard[] = [
    {
      id: 1,
      name: "eigenheim"
    },
    {
      id: 1,
      name: "kuechen und baeder"
    },
    {
      id: 2,
      name: "Verkauf"
    },
    {
      id: 3,
      name: "Monteur"
    },
    {
      id: 4,
      name: "Administration"
    }
  ];