import { Injectable } from '@angular/core';
import { BusinessCard } from './business-card'

@Injectable()
export class CardService {
    getCards() {
        return MOCKEDCARDS;
    }
}

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