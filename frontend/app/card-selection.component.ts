import { Component } from '@angular/core';
import { BusinessCard} from './business-card'

@Component({
    selector: "card-selection",
    templateUrl : "app/card-selection.html"
})

export class CardSelectionComponent {
     businessCards :BusinessCard[] = [
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
}